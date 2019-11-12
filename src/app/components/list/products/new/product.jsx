import React from "react";
import InputField from "../../../input/field";
import ConfirmButton from "../../../button/confirm";
import "./product.scss";

function NewProduct({
  filterKeys,
  useConfirmNewProductState,
  useProductNameState,
  hidden,
  ...other
}) {
  return (
    <div style={{ display: "flex" }}>
      <InputField
        classNamePrefix="new-product"
        useState={useProductNameState}
        {...{ filterKeys, hidden, ...other }}
      />
      <ConfirmButton
        onlySetConfirmTrueAllowed={true}
        classNamePrefix="new-product"
        useState={useConfirmNewProductState}
        {...{ hidden }}
      />
    </div>
  );
}

export default NewProduct;
