import React from "react";

function InputField({ useState, ...other }) {
  const [inputText, setInputText] = useState;
  return <div className="input-field" {...other}></div>;
}

export default InputField;
