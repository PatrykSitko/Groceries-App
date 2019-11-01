import React from "react";

const FUNCTION = 1;
function InputField({ useState: inputState, ...other }) {
  const setInputText = inputState[FUNCTION];
  return (
    <div className="input-field" {...other}>
      <form onChange={e => setInputText(e.target.value)}>
        <input type="text" name="input-field" />
      </form>
    </div>
  );
}

export default InputField;
