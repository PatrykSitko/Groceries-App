import React from "react";
import { push } from "redux-first-routing";
import { connect } from "react-redux";

import MenuHeader from "./header";
import MenuFooter from "./footer";

const mapDispatchToProps = dispatch => {
  return { changePath: path => dispatch(push(path)) };
};

function Menu({ changePath }) {
  return [
    <MenuHeader {...{ key: "header", title: "GROCERIES APP", changePath }} />,
    <MenuFooter {...{ key: "footer", changePath }} />
  ];
}

export default connect(
  null,
  mapDispatchToProps
)(Menu);
