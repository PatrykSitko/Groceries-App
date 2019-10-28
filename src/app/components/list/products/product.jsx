import React, { useState, useEffect } from "react";
import "./products.scss";

import Checkbox from "../../button/checkbox";
import DeleteButton from "../../button/delete";

function Product({
  onClick,
  onDelete,
  onSelect,
  isSelected,
  isPurchased = { who: null, price: null },
  onPurchase,
  className,
  title: product,
  ...other
}) {
  delete other.dispatch;
  const [checked, setChecked] = useState(isSelected);
  const [deleteMode, setDeleteMode] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [effectClass, setEffectClass] = useState("hide");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setEffectClass(undefined);
      clearTimeout(timeout);
    }, 1);
  }, []);
  useEffect(() => {
    if (checked !== isSelected) {
      setChecked(checked);
      setEffectClass("hide");
      const timeout = setTimeout(() => {
        setEffectClass(undefined);
        if (typeof onSelect === "function") {
          onSelect(checked);
        }
        clearTimeout(timeout);
      }, 300);
    }
  }, [isSelected, onSelect, checked]);
  return (
    <div
      className={`product${
        typeof effectClass === "string" ? ` ${effectClass}` : ""
      }${typeof className === "string" ? ` ${className}` : ""}`}
      onClick={event => {
        if (typeof onClick === "function") {
          onClick(event);
        }
        if (!event.target.className.includes("checkbox") && !isSelected) {
          setDeleteMode(!deleteMode);
          // if (typeof onDelete === "function" && !isSelected) {
          // setEffectClass("hide");
          // const timeout = setTimeout(() => {
          //   onDelete(product);
          //   clearTimeout(timeout);
          // }, 300);
          // }
        }
      }}
      {...other}
    >
      {product}
      <div className="separator" />
      {!deleteMode ? (
        <Checkbox useState={[checked, setChecked]} />
      ) : (
        <DeleteButton useState={[deleted, setDeleted]} />
      )}
    </div>
  );
}

export default Product;
