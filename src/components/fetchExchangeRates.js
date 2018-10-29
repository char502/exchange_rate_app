import {
  fetchExchangeBegin,
  fetchExchangeSuccess,
  fetchExchangeError
} from "../actions/ratesActions";

const apiUrl = "https://api.exchangeratesapi.io/latest?base=GBP";

export function fetchExchangeRates() {
  return (dispatch) => {
    dispatch(fetchExchangeBegin());
    return fetch(apiUrl)
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchExchangeSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchExchangeError(error)));
  };
}
// console.log(fetchExchangeRates(rates));
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// export const fetchExchangeBegin = () => ({
//   type: FETCH_EXCHANGERATE_BEGIN
// });

// export const fetchExchangeSuccess = (products) => ({
//   type: FETCH_EXCHANGERATE_SUCCESS,
//   payload: { exchangeRates }
// });

// export const fetchExchangeError = (error) => ({
//   type: FETCH_EXCHANGERATE_FAILURE,
//   payload: { error }
// });
