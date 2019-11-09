import { NAVIGATOR_ON_LINE } from "../types";

export default (currentNavigatorState, onLine) => {
  return {
    type: NAVIGATOR_ON_LINE,
    payload: { navigator: { ...currentNavigatorState, onLine: onLine } }
  };
};
