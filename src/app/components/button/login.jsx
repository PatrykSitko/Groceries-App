import React from "react";
import "./login.scss";

function LoginButton({ className, ...other }) {
  return (
    <div
      {...{
        className: `login-button${
          typeof className === "string" ? ` ${className}` : ""
        }`,
        ...other
      }}
    >
      Login
    </div>
  );
}

export default LoginButton;
