import { SET_FOOD_ENTRIES } from "../../types";

export default ({
  state,
  foodEntries = [
    {
      categoryKeys: ["empty"],
      selected: false,
      purchased: {
        price: null,
        who: null
      },
      title: {
        en: "",
        pl: "",
        fr: "",
        nl: ""
      }
    }
  ]
}) => ({
  type: SET_FOOD_ENTRIES,
  payload: {
    food: {
      ...state.food,
      entries:
        typeof foodEntries === "object" &&
        foodEntries.constructor.name === "Array"
          ? [foodEntries]
              .flat(Infinity)
              .filter(({ categoryKeys }) => !categoryKeys.includes("empty"))
          : state.food.entries
    }
  }
});
