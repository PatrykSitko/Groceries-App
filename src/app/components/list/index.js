import React from "react";
import "./list.scss";

import ToggleButton from "../button/toggle";
import AddButton from "../button/add";

function List({ getSelected: setSelected, children, ...other }) {
  const entries = [children].flat(Infinity);
  return (
    <div className="list" {...other}>
      <div className="selected-entry">Christmas dinner</div>
      <ToggleButton />
      <AddButton />
      <div className="enties"></div>
    </div>
  );
}

export default List;
