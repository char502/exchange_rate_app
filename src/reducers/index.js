import { createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { rates } from "./ratesReducer";

const store = createStore(
  combineReducers({
    rates
  })
);

// export default combineReducers({
//   rates: ratesReducer
// });
