import React, { useState, useEffect } from "react";
import "./products.scss";

import Checkbox from "../../button/checkbox";
import DeleteButton from "../../button/delete";

const FUNCTION = 1;

function Product({
  onClick,
  onDelete,
  onSelect,
  isSelected,
  useSetBuyItemState,
  isPurchased = { who: null, price: null },
  className,
  title: product,
  ...other
}) {
  delete other.dispatch;
  const [checked, setChecked] = useState(isSelected);
  const [deleteMode, setDeleteMode] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const setBuyMode = useSetBuyItemState[FUNCTION];
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
        isPurchased.who && isPurchased.price ? " purchased" : ""
      }${typeof effectClass === "string" ? ` ${effectClass}` : ""}${
        typeof className === "string" ? ` ${className}` : ""
      }`}
      onClick={event => {
        if (typeof onClick === "function") {
          onClick(event, product);
        }

        if (
          !event.target.className.includes("checkbox") &&
          !event.target.className.includes("delete")
        ) {
          if (isSelected) {
            setBuyMode(product);
          } else if (!isPurchased || !isPurchased.who) {
            setDeleteMode(!deleteMode);
          }
        }

        if (
          event.target.className.includes("delete") &&
          typeof onDelete === "function"
        ) {
          setEffectClass("hide");
          const timeout = setTimeout(() => {
            setDeleteMode(!deleteMode);
            onDelete(product, event);
            clearTimeout(timeout);
          }, 300);
        }
      }}
      {...other}
    >
      <div className="product-title">{product}</div>
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
