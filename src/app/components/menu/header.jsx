import React from "react";
import "./header.scss";
import LoginButton from "../button/login";

function MenuHeader({ title, changePath, ...other }) {
  return [
    <header
      {...{
        key: "menu-header-background",
        className: "menu-header-background"
      }}
    >
      <div className="title">DRAWBOTICS</div>
    </header>,
    <header {...{ key: "menu-header", className: "menu-header", ...other }}>
      <div className="title">{title}</div>
      <div className="separator" />
      <LoginButton />
    </header>
  ];
}

export default MenuHeader;
