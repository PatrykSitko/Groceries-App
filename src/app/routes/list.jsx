import React from "react";
import { connect } from "react-redux";

import List, { Category } from "../components/list";
import ProductList from "../components/list/products";
import { setSelectedFoodCategoryKey } from "../../redux/actions/all";

const mapStateToProps = ({ state }) => {
  const {
    user: { language },
    food: { "selected-category-key": selectedCategoryKey, categories }
  } = state;
  return { state, language, selectedCategoryKey, categories };
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
  categories
}) {
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
      <ProductList />
    </section>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRoute);
