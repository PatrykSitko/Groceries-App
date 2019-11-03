import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import List, { Category, AddCategory } from "../components/list";
import {
  setSelectedFoodCategoryKey,
  setIsSelectedFoodEntry,
  setFoodEntries
} from "../../redux/actions/all";
import ProductsList, {
  Product,
  Popup as ProductPopup
} from "../components/list/products";
import { useFitAvailableSpace } from "../components/effects";
import PopupScreen, { Popup } from "../components/screen/container/popup";

const mapStateToProps = ({ state }) => {
  const {
    user: { language },
    food: {
      "selected-category-key": selectedCategoryKey,
      categories,
      entries: products
    },
    window: { inner },
    routes: { "supported-languages": supportedLanguages }
  } = state;
  return {
    state,
    language,
    selectedCategoryKey,
    categories,
    products,
    windowInnerDimensions: inner,
    supportedLanguages
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
    ),
  deleteFoodEntry: (state, productTitle, language) => {
    const currentFoodEntries = state.food.entries;
    dispatch(
      setFoodEntries({
        state,
        foodEntries: [currentFoodEntries]
          .flat(Infinity)
          .filter(({ title }) => title[language] !== productTitle)
      })
    );
  }
});

function ListRoute({
  language,
  state,
  setSelectedCategoryKey,
  selectedCategoryKey,
  setIsSelectedFoodEntry,
  categories,
  products,
  windowInnerDimensions,
  supportedLanguages,
  deleteFoodEntry
}) {
  const currentProducts = [products]
    .flat(Infinity)
    .filter(({ categoryKeys }) => categoryKeys.includes(selectedCategoryKey));
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const [buyModeItem, setBuyModeItem] = useState(false);
  return (
    <section
      {...{
        id: "route",
        ref: useRef(),
        style: useFitAvailableSpace(windowInnerDimensions)
      }}
    >
      <List
        onAddClick={() => setAddButtonClicked(!addButtonClicked)}
        initiallySelectedCategoryKey={selectedCategoryKey}
        getSelectedCategoryKey={key => setSelectedCategoryKey(state, key)}
      >
        {[categories].flat(Infinity).map(({ key, title }) => (
          <Category {...{ key, id: key, title: title[language] }} />
        ))}
      </List>
      <PopupScreen
        {...{
          windowInnerDimensions,
          useState: [addButtonClicked, setAddButtonClicked]
        }}
      >
        <Popup>
          <AddCategory
            currentLanguage={language}
            supportedLanguages={supportedLanguages}
          />
        </Popup>
      </PopupScreen>
      <ProductsList>
        {currentProducts.map(({ selected, title }) => (
          <Product
            key={Object.values(title).join("")}
            title={title[language]}
            isSelected={selected}
            onSelect={isSelected =>
              setIsSelectedFoodEntry(state, title, isSelected)
            }
            onDelete={product => deleteFoodEntry(state, product, language)}
            useSetBuyItemState={[buyModeItem, setBuyModeItem]}
          />
        ))}
      </ProductsList>
      <PopupScreen
        {...{
          windowInnerDimensions,
          useState: [buyModeItem, setBuyModeItem]
        }}
      >
        <ProductPopup product={buyModeItem} {...{ language }} />
      </PopupScreen>
    </section>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRoute);
