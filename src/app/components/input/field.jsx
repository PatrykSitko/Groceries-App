import React from "react";
import "./field.scss";

const FUNCTION = 1;
function InputField({ useState: inputState, ...other }) {
  const setInputText = inputState[FUNCTION];
  return (
    <form
      onSubmit={e => e.preventDefault()}
      onChange={e => setInputText(e.target.value)}
    >
      <input
        className="input-field"
        type="text"
        name="input-field"
        {...other}
      />
    </form>
  );
}

export default InputField;
