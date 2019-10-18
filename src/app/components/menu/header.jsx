import React from "react";
import "./header.scss";
import LoginButton from "../button/login";

function MenuHeader({ title, changePath }) {
  return (
    <header className="menu-header">
      <div className="title">{title}</div>
      <div className="separator" />
      <LoginButton />
    </header>
  );
}

export default MenuHeader;
