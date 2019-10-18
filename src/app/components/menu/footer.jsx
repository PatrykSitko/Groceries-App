import React from "react";
import "./footer.scss";

export { default as Entry } from "./footer.entry";

function MenuFooter({ changePath, children: entries, ...other }) {
  return <footer {...{ className: "menu-footer", ...other }}>{entries}</footer>;
}

export default MenuFooter;
