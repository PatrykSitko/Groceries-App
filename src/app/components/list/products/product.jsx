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
  const [effectClass, setEffectClass] = useState("hide");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setEffectClass(undefined);
      clearTimeout(timeout);
    }, 1);
  }, []);
  useEffect(() => {
    if (typeof onSelect === "function" && checked !== isSelected) {
      setChecked(checked);
      setEffectClass("hide");
      const timeout = setTimeout(() => {
        setEffectClass(undefined);
        onSelect(checked);
        clearTimeout(timeout);
      }, 300);
    }
  }, [isSelected, onSelect, checked]);
  return (
    <div
      className={`product${
        typeof effectClass === "string" ? ` ${effectClass}` : ""
      }${typeof className === "string" ? ` ${className}` : ""}`}
      {...other}
    >
      {product}
      <div className="separator" />
      <Checkbox useState={[checked, setChecked]} />
    </div>
  );
}

export default Product;
