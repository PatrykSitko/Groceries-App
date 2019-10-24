import React from "react";
import "./products.scss";

import Checkbox from "../../button/checkbox";

function Product({ className, title: product, ...other }) {
  delete other.dispatch;
  return (
    <div
      className={`product${
        typeof className === "string" ? ` ${className}` : ""
      }`}
      {...other}
    >
      {product}
      <div className="separator" />
      <Checkbox />
    </div>
  );
}

export default Product;
