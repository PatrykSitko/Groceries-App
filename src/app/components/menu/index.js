import React from "react";
import { push } from "redux-first-routing";
import { connect } from "react-redux";

import MenuHeader from "./header";
import MenuFooter, { Entry } from "./footer";
import images from "../../resources/images";

const mapDispatchToProps = dispatch => {
  return { changePath: path => dispatch(push(path)) };
};

function Menu({ changePath }) {
  return [
    <MenuHeader {...{ key: "header", title: "GROCERIES APP", changePath }} />,
    <MenuFooter {...{ key: "footer", changePath }}>
      <Entry
        title="List"
        image={{ src: <images.interactive.menu.List />, alt: "list" }}
      />
      <Entry
        title="stats"
        image={{ src: <images.interactive.menu.Stats />, alt: "stats" }}
      />
      <Entry
        title="Recipes"
        image={{ src: <images.interactive.menu.Fork />, alt: "fork" }}
      />
    </MenuFooter>
  ];
}

export default connect(
  null,
  mapDispatchToProps
)(Menu);
