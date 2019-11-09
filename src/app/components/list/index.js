import React, { useState, useEffect, useRef } from "react";
import "./list.scss";

import { getElementRef, getElementRect } from "../tools/element";
import ToggleButton from "../button/toggle";
import AddButton from "../button/add";

export { default as Category } from "./category";
export { default as AddCategory } from "./category/add";

function List({
  onAddClick,
  hideAddClick = false,
  initiallySelectedCategoryKey,
  getSelectedCategoryKey: setSelected,
  className,
  children: categories,
  ...other
}) {
  delete other.dispatch;
  const categoriesRef = useRef();
  const [updateTimeout, setUpdateTimeout] = useState(undefined);
  const [categoriesStyle, setCategoriesStyle] = useState({});
  const [selectedCategoryID, setSelectedCategoryID] = useState(
    initiallySelectedCategoryKey
  );
  const toggleButtonState = useState(false);
  const [isToggled, setIsToggled] = toggleButtonState;
  const selectedCategory = categories.filter(
    ({ props: { id } }) => id === selectedCategoryID
  )[0];
  useCurrentCategoriesWidthAndTopAligner(
    categoriesStyle,
    selectedCategoryID,
    updateTimeout,
    setUpdateTimeout,
    setCategoriesStyle
  );
  return (
    <div className={`list${className ? ` ${className}` : ""}`} {...other}>
      {React.cloneElement(selectedCategory, {
        className: `selected-category${
          selectedCategory.props.title.length > 20 &&
          categoriesStyle.width <= 434.3
            ? " overflow"
            : ""
        }`
      })}
      <ToggleButton id="list-toggle-button" useState={toggleButtonState} />
      <AddButton onClick={onAddClick} hidden={hideAddClick} />
      <div
        className={`categories${isToggled ? "" : " hidden"}`}
        style={categoriesStyle}
        ref={categoriesRef}
      >
        {categories
          .filter(({ props: { id } }) => id !== selectedCategoryID)
          .map((category, index, categories) => {
            const key = category.props.id;
            return React.cloneElement(category, {
              key,
              className:
                index === 0
                  ? "first"
                  : index === categories.length - 1
                  ? "last"
                  : undefined,
              onClick: () => {
                if (typeof setSelected === "function") {
                  setSelected(key);
                }
                setSelectedCategoryID(key);
                setIsToggled(!isToggled);
              }
            });
          })}
      </div>
    </div>
  );
}

function useCurrentCategoriesWidthAndTopAligner(
  categoriesStyle,
  selectedCategoryID,
  updateTimeout,
  setUpdateTimeout,
  setCategoriesStyle
) {
  useEffect(() => {
    if (!updateTimeout) {
      setUpdateTimeout(
        setTimeout(() => {
          const currentCategoryElement = document.getElementById(
            selectedCategoryID
          );
          if (!currentCategoryElement) {
            clearTimeout(updateTimeout);
            return;
          }
          const currentCategoryRef = getElementRef(currentCategoryElement);
          const currentCategoriesStyle = { width: 0 };
          if (currentCategoryRef && currentCategoryRef.current) {
            const currentCategoryRect = getElementRect(currentCategoryRef);
            if (currentCategoryRect) {
              const { left, bottom, width } = currentCategoryRect;
              currentCategoriesStyle.left = left;
              currentCategoriesStyle.top = bottom;
              currentCategoriesStyle.width += width;
            }
          }
          const currentToggleButtonElement = document.getElementById(
            "list-toggle-button"
          );
          if (!currentToggleButtonElement) {
            clearTimeout(updateTimeout);
            return;
          }
          const currentToggleButtonRef = getElementRef(
            currentToggleButtonElement
          );
          if (currentToggleButtonRef && currentToggleButtonRef.current) {
            const { width } = getElementRect(currentToggleButtonRef);
            currentCategoriesStyle.width += width;
          }
          if (
            Object.values(currentCategoriesStyle).join("") !==
            Object.values(categoriesStyle).join("")
          ) {
            setCategoriesStyle(currentCategoriesStyle);
          }
          setUpdateTimeout(clearTimeout(updateTimeout));
        }, 1)
      );
    }
  }, [
    categoriesStyle,
    selectedCategoryID,
    updateTimeout,
    setUpdateTimeout,
    setCategoriesStyle
  ]);
}

export default List;
