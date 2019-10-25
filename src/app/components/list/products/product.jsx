import React, { useState, useEffect } from "react";
import "./products.scss";

import Checkbox from "../../button/checkbox";

function Product({
  onSelect,
  isSelected,
  className,
  title: product,
  ...other
}) {
  delete other.dispatch;
  const [checked, setChecked] = useState(isSelected);
  useEffect(() => {
    if (typeof onSelect === "function" && checked !== isSelected) {
      onSelect(checked);
    }
  }, [isSelected, onSelect, checked]);
  return (
    <div
      className={`product${
        typeof className === "string" ? ` ${className}` : ""
      }`}
      {...other}
    >
      {product}
      <div className="separator" />
      <Checkbox useState={[checked, setChecked]} />
    </div>
  );
}

export default Product;
