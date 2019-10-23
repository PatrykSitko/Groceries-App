import React, { useState } from "react";
import { connect } from "react-redux";
import "./list.scss";

import ToggleButton from "../button/toggle";
import AddButton from "../button/add";

export { default as Category } from "./category";

const mapStateToProps = ({
  state: {
    window: { inner }
  }
}) => ({ windowInnerDimensions: inner });
function List({
  windowInnerDimensions,
  initiallySelectedCategoryKey,
  getSelectedCategoryKey: setSelected,
  children: categories,
  ...other
}) {
  delete other.dispatch;
  const [selectedCategoryID, setSelectedCategoryID] = useState(
    initiallySelectedCategoryKey
  );
  const toggleButtonState = useState(false);
  const [isToggled, setIsToggled] = toggleButtonState;
  const selectedCategory = categories.filter(
    ({ props: { id } }) => id === selectedCategoryID
  )[0];
  return (
    <div className="list" {...other}>
      {React.cloneElement(selectedCategory, {
        className: `selected-category${
          selectedCategory.props.title.length > 20 &&
          windowInnerDimensions.width <= 1003
            ? " overflow"
            : ""
        }`
      })}
      <ToggleButton useState={toggleButtonState} />
      <AddButton />
      <div className={`categories${isToggled ? "" : " hidden"}`}>
        {categories
          .filter(({ props: { id } }) => id !== selectedCategoryID)
          .map(category => {
            const key = category.props.id;
            return React.cloneElement(category, {
              key,
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

export default connect(mapStateToProps)(List);
