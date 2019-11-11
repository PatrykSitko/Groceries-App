import React from "react";
import { push } from "redux-first-routing";
import { connect } from "react-redux";

import MenuHeader from "./header";
import MenuFooter, { Entry } from "./footer";
import OfflineNotice from "../screen/notice/neInternetConnection";
import images from "../../resources/images";

const mapStateToProps = ({
  state: {
    routes,
    navigator: { onLine },
    user: { language, name }
  },
  router
}) => ({ routes, language, userName: name, router, isOnLine: onLine });
const mapDispatchToProps = dispatch => ({
  changePath: path => dispatch(push(path))
});
const appTitle = {
  pl: "APP SPOŻYWCZA",
  en: "GROCERIES APP",
  nl: "BOODSCHAPPEN APP",
  fr: "APP DE COURSES"
};
function Menu({ routes, language, router, changePath, isOnLine, userName }) {
  const path = {
    list: `/${language}/${routes[language].list}`,
    graph: `/${language}/${routes[language].graph}`,
    recipes: `/${language}/${routes[language].recipes}`
  };
  return [
    <OfflineNotice
      {...{ key: "offline-notice", language, isOnLine, userName }}
    />,
    <MenuHeader
      {...{
        key: "header",
        title: appTitle[language],
        image: { src: images.menu.grocery, alt: "grocery" },
        changePath
      }}
    />,
    <MenuFooter {...{ key: "footer", changePath }}>
      <Entry
        title={routes[language].list}
        image={{
          src: <images.interactive.menu.List />,
          alt: "list"
        }}
        enabled={router.pathname.includes(path.list)}
        href={path.list}
      />
      <Entry
        title={routes[language].graph}
        image={{
          src: <images.interactive.menu.Stats />,
          alt: "stats"
        }}
        enabled={router.pathname.includes(path.graph)}
        href={path.graph}
      />
      <Entry
        title={routes[language].recipes}
        image={{
          src: <images.interactive.menu.Fork />,
          alt: "fork"
        }}
        enabled={router.pathname.includes(path.recipes)}
        href={path.recipes}
      />
    </MenuFooter>
  ];
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
