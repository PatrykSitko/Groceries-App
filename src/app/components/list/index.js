import React, { useState } from "react";
import "./list.scss";

import ToggleButton from "../button/toggle";
import AddButton from "../button/add";

export { default as Category } from "./category";

function List({
  initiallySelectedCategoryKey,
  getSelected: setSelected,
  children: categories,
  ...other
}) {
  const [selectedCategoryID, setSelectedCategoryID] = useState(
    initiallySelectedCategoryKey
  );
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="list" {...other}>
      {React.cloneElement(
        categories.filter(({ props: { id } }) => id === selectedCategoryID)[0],
        { className: "selected-category" }
      )}
      <ToggleButton getToggledState={setIsToggled} />
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
              }
            });
          })}
      </div>
    </div>
  );
}

export default List;
