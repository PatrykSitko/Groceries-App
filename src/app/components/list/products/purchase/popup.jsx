import React, { useState } from "react";
import InputField from "../../../input/field";

function PurchasePopup() {
  const [inputText, setInputText] = useState("");
  return (
    <div id="popup" className="purchase">
      <InputField useState={[inputText, setInputText]} />
    </div>
  );
}

export default PurchasePopup;
