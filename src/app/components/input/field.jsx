import React, { useRef, useState, useEffect } from "react";
import "./field.scss";

function InputField({ filterKeys, useState: inputState, ...other }) {
  const [inputText, setInputText] = inputState;
  const [currentInputText, setCurrentInputText] = useState("");
  useEffect(() => {
    const newCurrentInputText = currentInputText
      .split("")
      .filter(key => ![filterKeys].flat(Infinity).includes(key))
      .join("");
    if (newCurrentInputText !== currentInputText) {
      setInputText(newCurrentInputText);
      setCurrentInputText(newCurrentInputText);
    }
  }, [
    filterKeys,
    inputText,
    setInputText,
    currentInputText,
    setCurrentInputText
  ]);
  return (
    <input
      ref={useRef()}
      className="input-field"
      type="text"
      name="input-field"
      onChange={e => setCurrentInputText(e.target.value)}
      value={currentInputText}
      {...other}
    />
  );
}

export default InputField;
