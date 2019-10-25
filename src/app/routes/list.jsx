import React from "react";
import { connect } from "react-redux";

import List, { Category } from "../components/list";
import {
  setSelectedFoodCategoryKey,
  setIsSelectedFoodEntry
} from "../../redux/actions/all";
import ProductsList, { Product } from "../components/list/products";
import { useFitAvailableSpace } from "../components/route/effect/fitAvailableSpace";

const mapStateToProps = ({ state }) => {
  const {
    user: { language },
    food: {
      "selected-category-key": selectedCategoryKey,
      categories,
      entries: products
    },
    window: { inner }
  } = state;
  return {
    state,
    language,
    selectedCategoryKey,
    categories,
    products,
    windowInnerDimensions: inner
  };
};
const mapDispatchToProps = dispatch => ({
  setSelectedCategoryKey: (state, key) =>
    dispatch(setSelectedFoodCategoryKey({ state, key })),
  setIsSelectedFoodEntry: (state, tittleArray, isSelected) =>
    dispatch(
      setIsSelectedFoodEntry({
        state,
        foodEntryTittleArray: tittleArray,
        isSelected
      })
    )
});
function ListRoute({
  language,
  state,
  setSelectedCategoryKey,
  selectedCategoryKey,
  setIsSelectedFoodEntry,
  categories,
  products,
  windowInnerDimensions
}) {
  const currentProducts = [products]
    .flat(Infinity)
    .filter(({ categoryKeys }) => categoryKeys.includes(selectedCategoryKey));
  return (
    <section
      {...{ id: "list", style: useFitAvailableSpace(windowInnerDimensions) }}
    >
      <List
        initiallySelectedCategoryKey={selectedCategoryKey}
        getSelectedCategoryKey={key => setSelectedCategoryKey(state, key)}
      >
        {[categories].flat(Infinity).map(({ key, title }) => (
          <Category {...{ key, id: key, title: title[language] }} />
        ))}
      </List>
      <ProductsList>
        {currentProducts.map(({ selected, title }) => (
          <Product
            key={Object.values(title).join("")}
            title={title[language]}
            isSelected={selected}
            onSelect={isSelected =>
              setIsSelectedFoodEntry(state, title, isSelected)
            }
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
