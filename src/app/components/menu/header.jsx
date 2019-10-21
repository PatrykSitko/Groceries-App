import React from "react";
import "./header.scss";

import LoginButton from "../button/login";
import LanguageButton from "../button/language";

function MenuHeader({
  title,
  image: { src, alt } = { src: "#", alt: "" },
  changePath,
  ...other
}) {
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
      {/* eslint-disable-next-line jsx-a11y/alt-text*/}
      <img {...{ src, alt }} />
      <div className="separator" />
      <LoginButton />
      <LanguageButton />
    </header>
  ];
}

export default MenuHeader;
