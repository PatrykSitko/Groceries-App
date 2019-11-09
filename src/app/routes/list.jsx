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
    navigator: { onLine },
    routes: { "supported-languages": supportedLanguages }
  } = state;
  return {
    state,
    language,
    selectedCategoryKey,
    categories,
    products,
    windowInnerDimensions: inner,
    supportedLanguages,
    isOnLine: onLine
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
  isOnLine,
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
  const [translationPromises, setTranslationPromises] = useState({
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
  useFetchAddCategoryTranslationPromises(
    addCategoryConfirmed,
    addCategoryInputText,
    language,
    translateLanguages,
    translationPromises,
    isOnLine,
    setTranslationPromises,
    setAddButtonClicked,
    setAddCategoryInputText,
    setAddCategoryConfirmed
  );
  console.log(translationPromises);
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

function useFetchAddCategoryTranslationPromises(
  addCategoryConfirmed,
  addCategoryInputText,
  language,
  translateLanguages,
  translationPromises,
  isOnLine,
  setTranslationPromises,
  setAddButtonClicked,
  setAddCategoryInputText,
  setAddCategoryConfirmed
) {
  useEffect(() => {
    if (addCategoryConfirmed && isOnLine) {
      const __translationPromises__ = {};
      translateLanguages.forEach(translateLanguage =>
        !typeof __translationPromises__[translateLanguage] !== "object" &&
        translateLanguage !== language
          ? (__translationPromises__[translateLanguage] = translate(
              language,
              translateLanguage,
              addCategoryInputText
            ))
          : ""
      );
      if (
        Object.values(__translationPromises__).join("") !==
        Object.values(translationPromises).join("")
      ) {
        setTranslationPromises({
          [language]: addCategoryInputText,
          ...__translationPromises__
        });
      }
      setAddButtonClicked(false);
      setAddCategoryInputText("");
      setAddCategoryConfirmed(false);
    }
  }, [
    setTranslationPromises,
    setAddButtonClicked,
    setAddCategoryInputText,
    setAddCategoryConfirmed,
    addCategoryConfirmed,
    addCategoryInputText,
    language,
    translateLanguages,
    translationPromises,
    isOnLine
  ]);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRoute);
