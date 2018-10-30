// import { createStore } from "redux";
// import exchangeRateFetchReducer from "../reducers/exchangeRateFetchReducer";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/RootReducer";

const initialState = {
  items: [],
  loading: false,
  error: null
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function configureStore(initialState) {
  return createStore(rootReducer, applyMiddleware(thunk));
}

// export default () => {
//     const store = createStore({
//         rates: exchangeRateFetchReducer
//     // combineReducers({
//     //   expenses: expensesReducer, // chosen name for the key state value and the reducer that manages it
//     //   filters: filtersReducer
//     }),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//   return store;
// };

const store = createStore(
  reducer /* preloadedState, */,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
