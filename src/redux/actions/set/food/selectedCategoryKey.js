import { SET_SELECTED_FOOD_CATEGORY_KEY } from "../../types";

export default ({ state: { food }, key: categoryKey }) => ({
  type: SET_SELECTED_FOOD_CATEGORY_KEY,
  payload: {
    food: {
      ...food,
      "selected-category-key": categoryKey
    }
  }
});
