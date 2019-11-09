import bindWindowListeners from "./listener/window";
import bindHistoryListener from "./listener/history";
import bindRouterListener from "./listener/router";
import bindNavigatorListener from "./listener/navigator";

export default store => {
  bindHistoryListener(store);
  bindRouterListener(store);
  bindWindowListeners(store);
  bindNavigatorListener(store);
};
