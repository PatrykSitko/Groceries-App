import React, { useState, useEffect } from "react";
import "./add.scss";
import { getElementRef, getElementRect } from "../../tools/element";
import InputField from "../../input/field";
import ConfirmButton from "../../button/confirm";
import { vmin } from "../../tools/vscale";

const FIRST = 0;

function AddListCategory({
  useInputTextState,
  useConfirmedState,
  product,
  style,
  ...other
}) {
  const [inputText, setInputText] = useInputTextState;
  const [confirmed, setConfirmed] = useConfirmedState;
  const [categoryRect, setCategoryRect] = useState({});
  const [updateTimeout, setUpdateTimeout] = useState(undefined);
  useUpdateCategoryRect(
    categoryRect,
    setCategoryRect,
    updateTimeout,
    setUpdateTimeout
  );
  return (
    <div className="add-category">
      <InputField
        className="category-descriptor"
        useState={[inputText, setInputText]}
        {...{
          key: "category-descriptor",
          style: { ...style, ...categoryRect },
          ...other
        }}
      />
      <ConfirmButton
        useState={[confirmed, setConfirmed]}
        key="confirm-button"
      />
    </div>
  );
}

function useUpdateCategoryRect(
  categoryRect,
  setCategoryRect,
  updateTimeout,
  setUpdateTimeout
) {
  useEffect(() => {
    if (!updateTimeout) {
      setUpdateTimeout(
        setTimeout(() => {
          const categoryRef = getElementRef(
            document.getElementsByClassName("category")[FIRST]
          );
          if (!categoryRef || !categoryRef.current) {
            return;
          }
          const rect = getElementRect(categoryRef);
          if (!rect) {
            return;
          }
          const { width, height } = rect;
          if (width !== categoryRect.width || height !== categoryRect.height) {
            setCategoryRect({
              width: width - vmin(0.2),
              height: height - vmin(0.95)
            });
          }
          setUpdateTimeout(clearTimeout(updateTimeout));
        }, 3)
      );
    }
  }, [categoryRect, setCategoryRect, updateTimeout, setUpdateTimeout]);
}
export default AddListCategory;
