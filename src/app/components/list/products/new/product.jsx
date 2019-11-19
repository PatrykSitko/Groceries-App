import React from "react";
import InputField from "../../../input/field";
import ConfirmButton from "../../../button/confirm";
import "./product.scss";

function NewProduct({
  useConfirmNewProductState,
  useProductNameState,
  hidden,
  ...other
}) {
  return (
    <div style={{ display: "flex" }}>
      <InputField
        filterKeys={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]}
        classNamePrefix="new-product"
        useState={useProductNameState}
        {...{ hidden, ...other }}
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
