import React, { useState, useEffect } from "react";
import "./toggle.scss";

function ToggleButton({ getToggledState, className, onClick, ...other }) {
  const [toggled, setToggled] = useState(false);
  useEffect(
    () =>
      typeof getToggledState === "function" ? getToggledState(toggled) : "",
    [getToggledState, toggled]
  );
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
