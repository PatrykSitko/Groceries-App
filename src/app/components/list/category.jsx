import React from "react";

function ListCategory({
  id: categoryKey,
  className,
  title: category,
  ...other
}) {
  return (
    <div
      id={categoryKey}
      className={`category${
        typeof className === "string" ? ` ${className}` : ""
      }`}
      {...other}
    >
      {category}
    </div>
  );
}

export default ListCategory;
