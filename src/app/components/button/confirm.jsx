import React from "react";
import "./confirm.scss";

function ConfirmButton({
  useState: useConfirmedState,
  className,
  onClick,
  ...other
}) {
  const [confirmed, setConfirmed] = useConfirmedState;
  return (
    <div
      className={`confirm-button${className ? ` ${className}` : ""}`}
      onClick={event => {
        if (typeof onClick === "function") {
          onClick(event, { confirmed: !confirmed });
        }
        setConfirmed(!confirmed);
      }}
      {...other}
    />
  );
}

export default ConfirmButton;
