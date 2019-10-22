import React, { useState } from "react";
import "./toggle.scss";

function ToggleButton({ className, onClick, ...other }) {
  const [toggled, setToggled] = useState(false);
  return (
    <div
      className={`toggle-button${toggled ? " toggled" : ""}${
        typeof className === "string" ? ` ${className}` : ""
      }`}
      onClick={event => {
        setToggled(!toggled);
        if (typeof onClick === "function") {
          onClick(event);
        }
      }}
      {...other}
    />
  );
}

export default ToggleButton;
