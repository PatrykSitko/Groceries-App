import React, { useState, useEffect } from "react";
import "./products.scss";
import { connect } from "react-redux";
import ToggleButton from "../../button/toggle";
import NewProduct from "./new/product";

export { default as Product } from "./product";
export { default as Popup } from "./purchase/popup";

const mapStateToProps = ({
  state: {
    user: { language }
  }
}) => ({ language });

const addItemDescriptor = {
  en: "Add new item",
  pl: "Dodaj nową pozycję",
  fr: "Ajoute un nouvel objet",
  nl: "Voeg een nieuw item toe"
};
const toggleSelectedDescriptor = {
  en: "Selected",
  pl: "Zaznaczone",
  fr: "Sélectionné",
  nl: "Gekozen"
};

const togglePurchasedDescriptor = {
  en: "Purchased",
  pl: "Kupione",
  fr: "Acheté",
  nl: "Gekocht"
};

function ProductsList({ language, children: products, ...other }) {
  delete other.dispatch;
  const [toggleSelected, setToggleSelected] = useState(false);
  const [togglePurchased, setTogglePurchased] = useState(false);
  const [newProductName, setNewProductName] = useState("");
  const [hideAddNewProduct, setHideAddNewProduct] = useState(false);
  const [confirmAddNewProduct, setConfirmAddNewProduct] = useState(false);
  const selectableProducts = [products]
    .flat(Infinity)
    .filter(({ props: { isSelected } }) => !isSelected);
  const selectedProducts = [products]
    .flat(Infinity)
    .filter(({ props: { isSelected } }) => isSelected);
  const purchasedProducts = [];
  useEffect(() => {
    if (hideAddNewProduct && confirmAddNewProduct) {
      setHideAddNewProduct(false);
      setConfirmAddNewProduct(false);
    }
  }, [
    hideAddNewProduct,
    setHideAddNewProduct,
    confirmAddNewProduct,
    setConfirmAddNewProduct
  ]);
  return (
    <section className={`product-list`} {...other}>
      <div
        className="add-product"
        onClick={() => setHideAddNewProduct(!hideAddNewProduct)}
        hidden={hideAddNewProduct}
      >
        {addItemDescriptor[language]}
      </div>
      <NewProduct
        useProductNameState={[newProductName, setNewProductName]}
        useConfirmNewProductState={[
          confirmAddNewProduct,
          setConfirmAddNewProduct
        ]}
        hidden={!hideAddNewProduct}
      />
      {selectableProducts.length > 0 ? (
        <div className="selectable-products">{selectableProducts}</div>
      ) : (
        ""
      )}

      {selectedProducts.length > 0 ? (
        <div className="toggle-products">
          {toggleSelectedDescriptor[language]}
          <ToggleButton useState={[toggleSelected, setToggleSelected]} />
        </div>
      ) : (
        ""
      )}
      {selectedProducts.length > 0 ? (
        <div className={`selected-products${toggleSelected ? "" : " hidden"}`}>
          {selectedProducts}
        </div>
      ) : (
        ""
      )}
      {purchasedProducts.length > 0 ? (
        <div
          className={`toggle-products${
            selectedProducts.length > 0 && purchasedProducts.length > 0
              ? " closer"
              : ""
          }`}
        >
          {togglePurchasedDescriptor[language]}
          <ToggleButton useState={[togglePurchased, setTogglePurchased]} />
        </div>
      ) : (
        ""
      )}
      {purchasedProducts.length > 0 ? (
        <div
          className={`purchased-products${togglePurchased ? "" : " hidden"}`}
        >
          {purchasedProducts}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default connect(mapStateToProps)(ProductsList);
