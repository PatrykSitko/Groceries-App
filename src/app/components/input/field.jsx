import React, { useRef } from "react";
import "./field.scss";

function InputField({
  classNamePrefix,
  className,
  allowKeys,
  filterKeys,
  useState: inputState,
  ...other
}) {
  const [inputText, setInputText] = inputState;
  return (
    <input
      ref={useRef()}
      className={`${classNamePrefix ? `${classNamePrefix}-` : ""}input-field${
        className ? ` ${className}` : ""
      }`}
      type="text"
      name="input-field"
      onChange={e =>
        setInputText(
          e.target.value
            .split("")
            .filter(
              key =>
                (allowKeys && [allowKeys].flat(Infinity).includes(key)) ||
                (filterKeys && ![filterKeys].flat(Infinity).includes(key)) ||
                (!allowKeys && !filterKeys)
            )
            .join("")
        )
      }
      value={inputText}
      {...other}
    />
  );
}

export default InputField;
