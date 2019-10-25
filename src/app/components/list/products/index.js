import React from "react";
import "./products.scss";
import { connect } from "react-redux";
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

function ProductsList({ language, children: products, ...other }) {
  delete other.dispatch;
  const selectableProducts = [products]
    .flat(Infinity)
    .filter(({ props: { isSelected } }) => !isSelected);
  const selectedProducts = [products]
    .flat(Infinity)
    .filter(({ props: { isSelected } }) => isSelected);
  return (
    <section className={`product-list`} {...other}>
      <div className="add-product">{addItemDescriptor[language]}</div>
      <div className="selectable-products">{selectableProducts}</div>
    </section>
  );
}

export default connect(mapStateToProps)(ProductsList);
