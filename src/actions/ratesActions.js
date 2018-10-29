// const apiUrl = "https://api.exchangeratesapi.io/latest?base=GBP";

// function fetchSomeRates() {
//   return fetch(apiUrl)
//     .then(handleErrors)
//     .then((res) => res.json());
// }

function fetchMainRates() {
  return new Promise((resolve) => {
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          rates: [
            {
              id: 0,
              name: "Apple"
            },
            {
              id: 1,
              name: "Bananas"
            },
            {
              id: 2,
              name: "Strawberries"
            }
          ]
        }),
      1000
    );
  });
}

export function fetchRates() {
  return (dispatch) => {
    dispatch(fetchExchangeBegin());
    return fetchMainRates()
      .then((json) => {
        dispatch(fetchExchangeSuccess(json.rates));
        return json.rates;
      })
      .catch((error) => dispatch(fetchExchangeError(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_EXCHANGERATE_BEGIN = "FETCH_EXCHANGERATE_BEGIN";
export const FETCH_EXCHANGERATE_SUCCESS = "FETCH_EXCHANGERATE_SUCCESS";
export const FETCH_EXCHANGERATE_FAILURE = "FETCH_EXCHANGERATE_FAILURE";

export const fetchExchangeBegin = () => ({
  type: FETCH_EXCHANGERATE_BEGIN
});

export const fetchExchangeSuccess = (rates) => ({
  type: FETCH_EXCHANGERATE_SUCCESS,
  payload: { rates }
});

export const fetchExchangeError = (error) => ({
  type: FETCH_EXCHANGERATE_FAILURE,
  payload: { error }
});
