import React, { useRef } from "react";
import "./field.scss";

function InputField({ useState: inputState, ...other }) {
  const [inputText, setInputText] = inputState;
  return (
    <form
      onSubmit={e => e.preventDefault()}
      onChange={e => setInputText(e.target.value)}
    >
      <input
        ref={useRef()}
        className="input-field"
        type="text"
        name="input-field"
        defaultValue={inputText}
        {...other}
      />
    </form>
  );
}

export default InputField;
