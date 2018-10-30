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
          date: "2018-10-29",
          rates: {
            BGN: 2.2027751498,
            CAD: 1.6800693787,
            BRL: 4.6437581655,
            HUF: 365.3646889219,
            DKK: 8.4036131009,
            JPY: 144.0735234491,
            ILS: 4.7495157003,
            TRY: 7.1073793756,
            RON: 5.2537505068,
            GBP: 1,
            PHP: 68.8167319908,
            HRK: 8.3700500068,
            NOK: 10.7142857143,
            ZAR: 18.5566743254,
            MXN: 25.1871874578,
            AUD: 1.8089156192,
            USD: 1.2818173627,
            KRW: 1461.1771861062,
            HKD: 10.0542866153,
            EUR: 1.1262783259,
            ISK: 154.8632698112,
            CZK: 29.1131684462,
            THB: 42.5688156057,
            MYR: 5.3541019057,
            NZD: 1.9598369149,
            PLN: 4.8634950669,
            CHF: 1.2821552462,
            SEK: 11.7031580844,
            CNY: 8.919561202,
            SGD: 1.7724242015,
            INR: 94.111253773,
            IDR: 19507.9740505474,
            RUB: 84.0647384782
          },
          base: "GBP"
        }),
      1000
    );
  });
}

export function fetchRates() {
  return (dispatch) => {
    dispatch(fetchExchangeBegin());
    return (
      fetchMainRates()
        // .then(handleErrors)
        // .then((res) => res.json())
        .then((json) => {
          dispatch(fetchExchangeSuccess(json.rates));
          return json.rates;
        })
        .catch((error) => dispatch(fetchExchangeError(error)))
    );
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
