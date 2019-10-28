import { SET_FOOD_ENTRIES } from "../../types";

export default ({ state, foodEntries }) => ({
  type: SET_FOOD_ENTRIES,
  payload: {
    food: {
      ...state.food,
      entries:
        typeof foodEntries === "object" &&
        foodEntries.constructor.name === "Array"
          ? foodEntries
          : state.food.entries
    }
  }
});
