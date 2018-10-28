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
