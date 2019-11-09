import React, { useRef } from "react";
import "./field.scss";

function InputField({ filterKeys, useState: inputState, ...other }) {
  const [inputText, setInputText] = inputState;
  return (
    <input
      ref={useRef()}
      className="input-field"
      type="text"
      name="input-field"
      onChange={e =>
        setInputText(
          e.target.value
            .split("")
            .filter(key => ![filterKeys].flat(Infinity).includes(key))
            .join("")
        )
      }
      value={inputText}
      {...other}
    />
  );
}

export default InputField;
