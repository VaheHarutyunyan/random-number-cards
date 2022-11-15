import {createStore, compose} from "redux";
import {rootReducer} from "./rootReducer";
import {loadState, saveState} from "./locale-storage";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStor() {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, composeEnhancer());

  //all  store saved in the locale storage
  store.subscribe(() =>
    setTimeout(() => {
      saveState(store.getState());
    }, 1000)
  );
  return store;
}
