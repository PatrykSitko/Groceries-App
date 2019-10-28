import React, { useState } from "react";
import "./products.scss";
import { connect } from "react-redux";
import ToggleButton from "../../button/toggle";
export { default as Product } from "./product";

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
  const selectableProducts = [products]
    .flat(Infinity)
    .filter(({ props: { isSelected } }) => !isSelected);
  const selectedProducts = [products]
    .flat(Infinity)
    .filter(({ props: { isSelected } }) => isSelected);
  const purchasedProducts = [];
  return (
    <section className={`product-list`} {...other}>
      <div className="add-product">{addItemDescriptor[language]}</div>
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
