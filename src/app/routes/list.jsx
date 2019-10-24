import React from "react";
import { connect } from "react-redux";

import List, { Category } from "../components/list";
import { setSelectedFoodCategoryKey } from "../../redux/actions/all";
import ProductsList, { Product } from "../components/list/products";

const mapStateToProps = ({ state }) => {
  const {
    user: { language },
    food: {
      "selected-category-key": selectedCategoryKey,
      categories,
      entries: products,
      "selected-entry-keys": selectedProducts
    }
  } = state;
  return {
    state,
    language,
    selectedCategoryKey,
    categories,
    products,
    selectedProducts
  };
};
const mapDispatchToProps = dispatch => ({
  setSelectedCategoryKey: (state, key) =>
    dispatch(setSelectedFoodCategoryKey({ state, key }))
});
function ListRoute({
  language,
  state,
  setSelectedCategoryKey,
  selectedCategoryKey,
  categories,
  products,
  selectedProducts
}) {
  const currentProducts = [products]
    .flat(Infinity)
    .filter(
      ({ selected, categoryKeys }) =>
        categoryKeys.includes(selectedCategoryKey) && !selected
    );
  return (
    <section id="list">
      <List
        initiallySelectedCategoryKey={selectedCategoryKey}
        getSelectedCategoryKey={key => setSelectedCategoryKey(state, key)}
      >
        {[categories].flat(Infinity).map(({ key, title }) => (
          <Category {...{ key, id: key, title: title[language] }} />
        ))}
      </List>
      <ProductsList>
        {currentProducts.map(({ title }) => (
          <Product
            key={Object.values(title).join("")}
            title={title[language]}
          />
        ))}
      </ProductsList>
    </section>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRoute);
