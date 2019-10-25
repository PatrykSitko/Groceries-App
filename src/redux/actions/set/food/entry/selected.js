import { SET_IS_SELECTED_FOOD_ENTRY } from "../../../types";

export default ({ state, foodEntryTittleArray, isSelected }) => ({
  type: SET_IS_SELECTED_FOOD_ENTRY,
  payload: {
    food: {
      ...state.food,
      entries: state.food.entries.map(entry =>
        typeof foodEntryTittleArray === "object" &&
        Object.values(entry.title).join("") ===
          Object.values(foodEntryTittleArray).join("")
          ? { ...entry, selected: isSelected }
          : entry
      )
    }
  }
});
