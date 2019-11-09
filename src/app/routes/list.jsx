import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import List, { Category, AddCategory } from "../components/list";
import {
  setSelectedFoodCategoryKey,
  setIsSelectedFoodEntry,
  setFoodEntries,
  setFoodCategories
} from "../../redux/actions/all";
import ProductsList, {
  Product,
  Popup as ProductPopup
} from "../components/list/products";
import { useFitAvailableSpace } from "../components/effects";
import PopupScreen from "../components/screen/container/popup";
import { translate } from "../components/tools/translate";

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
  },
  addFoodCategory: (state, titles = { en: "", pl: "", fr: "", nl: "" }) => {
    const lastFoodCategoriesKey = state.food.categories
      .map(({ key }) =>
        key !== "global" ? parseInt(key.replace("#", ""), 10) : ""
      )
      .filter(key => key !== "")
      .pop();
    const newCategoryKey = "#".concat(
      Number(lastFoodCategoriesKey + 1).toString(16)
    );
    dispatch(
      setFoodCategories({
        state,
        foodCategories: { title: titles, key: newCategoryKey }
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
  deleteFoodEntry,
  addFoodCategory
}) {
  const currentProducts = [products]
    .flat(Infinity)
    .filter(({ categoryKeys }) => categoryKeys.includes(selectedCategoryKey));
  const [translations, setTranslations] = useState({
    en: null,
    pl: null,
    fr: null,
    nl: null
  });
  const [newCategoryTitlesToAdd, setNewCategoryTitlesToAdd] = useState({
    en: null,
    pl: null,
    fr: null,
    nl: null
  });
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const [buyModeItem, setBuyModeItem] = useState(false);
  const [addCategoryInputText, setAddCategoryInputText] = useState("");
  const [addCategoryConfirmed, setAddCategoryConfirmed] = useState(false);
  const translateLanguages = [supportedLanguages]
    .flat(Infinity)
    .filter(supportedLanguage => supportedLanguage !== language);
  useEffect(() => {
    if (!translations[language]) {
      setTranslations({ [language]: addCategoryInputText });
    }
    if (!newCategoryTitlesToAdd[language]) {
      setNewCategoryTitlesToAdd({ [language]: addCategoryInputText });
    }
    Object.entries(translations).forEach(([targetLanguage, value]) => {
      if (!typeof value === "object") {
        setTranslations({
          ...translations,
          [targetLanguage]: translate(
            language,
            targetLanguage,
            addCategoryInputText
          ).then(translation =>
            setNewCategoryTitlesToAdd({
              ...newCategoryTitlesToAdd,
              [targetLanguage]: translation.responseData.translatedText
            })
          )
        });
      }
    });
  }, [
    language,
    translations,
    translateLanguages,
    addCategoryInputText,
    setAddCategoryInputText,
    newCategoryTitlesToAdd,
    setNewCategoryTitlesToAdd
  ]);
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
        <AddCategory
          useInputTextState={[addCategoryInputText, setAddCategoryInputText]}
          useConfirmedState={[addCategoryConfirmed, setAddCategoryConfirmed]}
        />
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
