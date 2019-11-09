import { SET_FOOD_CATEGORIES } from "../../types";

export default ({
  state,
  foodCategories = [{ title: { en: "", pl: "", fr: "", nl: "" }, key: "empty" }]
}) => ({
  type: SET_FOOD_CATEGORIES,
  payload: {
    food: {
      ...state.food,
      categories:
        typeof foodCategories === "object" &&
        foodCategories.constructor.name === "Array"
          ? [foodCategories].flat(Infinity).filter(({ key }) => key !== "empty")
          : state.food.categories
    }
  }
});
