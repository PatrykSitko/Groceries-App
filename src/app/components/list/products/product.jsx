import React, { useState } from "react";
import "./products.scss";

import Checkbox from "../../button/checkbox";

function Product({ className, title: product, ...other }) {
  delete other.dispatch;
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={`product${
        typeof className === "string" ? ` ${className}` : ""
      }`}
      {...other}
    >
      {product}
      <div className="separator" />
      <Checkbox useState={[checked, setChecked]} />
    </div>
  );
}

export default Product;
