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
  setWhoPurchasedFoodEntry: (state, language, productTitle, price, who) => {
    const currentFoodEntries = state.food.entries;
    const purchasedFoodEntry = currentFoodEntries.filter(
      ({ title }) => title[language] === productTitle
    )[0];
    if (purchasedFoodEntry) {
      const purchasedFoodEntryCopy = { ...purchasedFoodEntry };
      purchasedFoodEntryCopy.purchased.price = price;
      purchasedFoodEntryCopy.purchased.who = who;
      dispatch(
        setFoodEntries({
          state,
          foodEntries: [currentFoodEntries].flat(Infinity).map(foodEntry => {
            if (foodEntry.title[language] === productTitle) {
              return purchasedFoodEntryCopy;
            } else {
              return foodEntry;
            }
          })
        })
      );
    }
  },
  addFoodEntry: (state, productTitles, language) => {
    const currentFoodEntries = state.food.entries;
    const currentCategoryKey = state.food["selected-category-key"];
    const foodEntryExists = currentFoodEntries.filter(
      ({ title }) => title[language] === productTitles[language]
    );
    if (foodEntryExists.length > 0) {
      if (foodEntryExists[0].categoryKeys.includes(currentCategoryKey)) {
        return;
      } else {
        dispatch(
          setFoodEntries({
            state,
            foodEntries: [currentFoodEntries].flat(Infinity).map(foodEntry => {
              if (foodEntry.title[language] === productTitles[language]) {
                foodEntry.categoryKeys.push(currentCategoryKey);
                return foodEntry;
              } else {
                return foodEntry;
              }
            })
          })
        );
      }
    } else {
      dispatch(
        setFoodEntries({
          state,
          foodEntries: [currentFoodEntries].flat(Infinity).concat({
            categoryKeys: ["global", currentCategoryKey],
            selected: false,
            purchased: {
              price: null,
              who: null
            },
            title: productTitles
          })
        })
      );
    }
  },
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
        foodCategories: [
          ...state.food.categories,
          { title: titles, key: newCategoryKey }
        ]
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
  addFoodCategory,
  addFoodEntry,
  setWhoPurchasedFoodEntry
}) {
  const currentProducts = [products]
    .flat(Infinity)
    .filter(({ categoryKeys }) => categoryKeys.includes(selectedCategoryKey));
  const [newCategoryTitlesToAdd, setNewCategoryTitlesToAdd] = useState([]);
  const [newProductTitlesToAdd, setNewProductTitlesToAdd] = useState([]);
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const [buyModeItem, setBuyModeItem] = useState(false);
  const [addCategoryInputText, setAddCategoryInputText] = useState("");
  const [addCategoryConfirmed, setAddCategoryConfirmed] = useState(false);
  const [newProductNameInputText, setNewProductNameInputText] = useState("");
  const [confirmAddNewProduct, setConfirmAddNewProduct] = useState(false);
  const [confirmPurchaseProduct, setConfirmPurchaseProduct] = useState(false);
  const [
    allowedToHideAddNewProductState,
    setAllowedToHideAddNewProductState
  ] = useState(false);
  const [purchasePriceText, setPurchasePriceText] = useState("");
  const [whoPurchased, setWhoPurchased] = useState("");
  const translateLanguages = [supportedLanguages]
    .flat(Infinity)
    .filter(supportedLanguage => supportedLanguage !== language);
  useFetchAddCategoryTranslationPromises(
    language,
    isOnLine,
    translateLanguages,
    setAddButtonClicked,
    addCategoryInputText,
    addCategoryConfirmed,
    setAddCategoryInputText,
    setAddCategoryConfirmed,
    setNewCategoryTitlesToAdd
  );
  useAddFoodCategory(
    newCategoryTitlesToAdd,
    setNewCategoryTitlesToAdd,
    supportedLanguages,
    addFoodCategory,
    state
  );
  useFetchAddProductTranslationPromises(
    confirmAddNewProduct,
    isOnLine,
    language,
    newProductNameInputText,
    translateLanguages,
    setNewProductTitlesToAdd,
    setNewProductNameInputText,
    setAllowedToHideAddNewProductState
  );
  useAddFoodEntry(
    addFoodEntry,
    language,
    newProductTitlesToAdd,
    state,
    supportedLanguages,
    setNewProductTitlesToAdd
  );
  useSetPurchasedFoodEntry(
    state,
    language,
    buyModeItem,
    whoPurchased,
    purchasePriceText,
    confirmPurchaseProduct,
    setBuyModeItem,
    setWhoPurchased,
    setPurchasePriceText,
    setConfirmPurchaseProduct,
    setWhoPurchasedFoodEntry
  );
  useUnsetPurchasedFoodEntry(
    state,
    language,
    currentProducts,
    setWhoPurchasedFoodEntry
  );
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
        {[categories]
          .flat(Infinity)
          .sort()
          .map(({ key, title }) => (
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
      <ProductsList
        useNewProductNameInputTextState={[
          newProductNameInputText,
          setNewProductNameInputText
        ]}
        useConfirmAddNewProductState={[
          confirmAddNewProduct,
          setConfirmAddNewProduct
        ]}
        useAllowedToHideAddNewProductState={[
          allowedToHideAddNewProductState,
          setAllowedToHideAddNewProductState
        ]}
      >
        {currentProducts.sort().map(({ selected, title, purchased }) => (
          <Product
            key={Object.values(title).join("")}
            title={title[language]}
            isSelected={selected}
            isPurchased={purchased}
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
        <ProductPopup
          useWhoPurchasedState={[whoPurchased, setWhoPurchased]}
          usePriceState={[purchasePriceText, setPurchasePriceText]}
          useConfirmPurchaseState={[
            confirmPurchaseProduct,
            setConfirmPurchaseProduct
          ]}
          product={buyModeItem}
          {...{ language }}
        />
      </PopupScreen>
    </section>
  );
}
function useFetchAddCategoryTranslationPromises(
  language,
  isOnLine,
  translateLanguages,
  setAddButtonClicked,
  addCategoryInputText,
  addCategoryConfirmed,
  setAddCategoryInputText,
  setAddCategoryConfirmed,
  setNewCategoryTitlesToAdd
) {
  useEffect(() => {
    if (addCategoryConfirmed && isOnLine && addCategoryInputText.length > 0) {
      const translations = [];
      translateLanguages.forEach(translateLanguage =>
        translateLanguage !== language
          ? translate(
              language,
              translateLanguage,
              addCategoryInputText
            ).then(translation => translations.push(translation))
          : ""
      );
      translations.push({ language, translation: addCategoryInputText });
      setNewCategoryTitlesToAdd(translations);
      setAddButtonClicked(false);
      setAddCategoryInputText("");
      setAddCategoryConfirmed(false);
    }
  }, [
    setAddButtonClicked,
    setAddCategoryInputText,
    setAddCategoryConfirmed,
    addCategoryConfirmed,
    addCategoryInputText,
    language,
    translateLanguages,
    isOnLine,
    setNewCategoryTitlesToAdd
  ]);
}

function useAddFoodCategory(
  newCategoryTitlesToAdd,
  setNewCategoryTitlesToAdd,
  supportedLanguages,
  addFoodCategory,
  state
) {
  useEffect(() => {
    if (newCategoryTitlesToAdd.length === supportedLanguages.length) {
      const titles = {};
      newCategoryTitlesToAdd.forEach(
        ({ language, translation }) => (titles[language] = translation)
      );
      addFoodCategory(state, titles);
      setNewCategoryTitlesToAdd([]);
    }
  }, [
    newCategoryTitlesToAdd,
    setNewCategoryTitlesToAdd,
    supportedLanguages,
    addFoodCategory,
    state
  ]);
}
function useFetchAddProductTranslationPromises(
  confirmAddNewProduct,
  isOnLine,
  language,
  newProductNameInputText,
  translateLanguages,
  setNewProductTitlesToAdd,
  setNewProductNameInputText,
  setAllowedToHideAddNewProductState
) {
  useEffect(() => {
    if (
      confirmAddNewProduct &&
      isOnLine &&
      newProductNameInputText.length > 0
    ) {
      const translations = [];
      translateLanguages.forEach(translateLanguage =>
        translateLanguage !== language
          ? translate(
              language,
              translateLanguage,
              newProductNameInputText
            ).then(translation => translations.push(translation))
          : ""
      );
      translations.push({ language, translation: newProductNameInputText });
      setNewProductTitlesToAdd(translations);
      setNewProductNameInputText("");
      setAllowedToHideAddNewProductState(true);
    }
  }, [
    confirmAddNewProduct,
    isOnLine,
    language,
    newProductNameInputText,
    translateLanguages,
    setNewProductTitlesToAdd,
    setNewProductNameInputText,
    setAllowedToHideAddNewProductState
  ]);
}

function useAddFoodEntry(
  addFoodEntry,
  language,
  newProductTitlesToAdd,
  state,
  supportedLanguages,
  setNewProductTitlesToAdd
) {
  useEffect(() => {
    if (newProductTitlesToAdd.length === supportedLanguages.length) {
      const titles = {};
      newProductTitlesToAdd.forEach(
        ({ language, translation }) => (titles[language] = translation)
      );
      addFoodEntry(state, titles, language);
      setNewProductTitlesToAdd([]);
    }
  }, [
    addFoodEntry,
    language,
    newProductTitlesToAdd,
    state,
    supportedLanguages,
    setNewProductTitlesToAdd
  ]);
}
function useSetPurchasedFoodEntry(
  state,
  language,
  buyModeItem,
  whoPurchased,
  purchasePriceText,
  confirmPurchaseProduct,
  setBuyModeItem,
  setWhoPurchased,
  setPurchasePriceText,
  setConfirmPurchaseProduct,
  setWhoPurchasedFoodEntry
) {
  useEffect(() => {
    if (
      buyModeItem &&
      whoPurchased &&
      purchasePriceText.length > 1 &&
      confirmPurchaseProduct
    ) {
      setWhoPurchasedFoodEntry(
        state,
        language,
        buyModeItem,
        purchasePriceText,
        whoPurchased
      );
      setBuyModeItem(undefined);
      setWhoPurchased(undefined);
      setPurchasePriceText("");
      setConfirmPurchaseProduct(false);
    } else if (confirmPurchaseProduct) {
      setConfirmPurchaseProduct(false);
    }
  }, [
    state,
    language,
    buyModeItem,
    whoPurchased,
    purchasePriceText,
    confirmPurchaseProduct,
    setBuyModeItem,
    setWhoPurchased,
    setPurchasePriceText,
    setConfirmPurchaseProduct,
    setWhoPurchasedFoodEntry
  ]);
}
function useUnsetPurchasedFoodEntry(
  state,
  language,
  currentProducts,
  setWhoPurchasedFoodEntry
) {
  useEffect(() => {
    currentProducts.forEach(
      ({ selected, title, purchased: { price, who } }) => {
        if (!selected && (price || who)) {
          setWhoPurchasedFoodEntry(
            state,
            language,
            title[language],
            null,
            null
          );
        }
      }
    );
  }, [state, language, currentProducts, setWhoPurchasedFoodEntry]);
}
export default connect(mapStateToProps, mapDispatchToProps)(ListRoute);
