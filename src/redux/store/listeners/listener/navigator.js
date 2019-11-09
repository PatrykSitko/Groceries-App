import { setNavigatorOnLine } from "../../../actions/all";

export default store => {
  setInterval(() => {
    const { onLine } = store.getState().state.navigator;
    if (navigator.onLine !== onLine) {
      store.dispatch(
        setNavigatorOnLine(store.getState().state.navigator, navigator.onLine)
      );
    }
  }, 100);
};
