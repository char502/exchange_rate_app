import React from "react";
import { connect } from "react-redux";
import { fetchExchangeRates } from "./fetchExchangeRates";
import { createStore } from "redux";
import reducer from "../reducers/index";

// import { items, loading, error } from "./ratesReducer";

const store = createStore(reducer);

class ExchangeRateList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchExchangeRates());
  }

  render() {
    const { error, loading, rates } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    // let test = Object.keys(items);
    // console.log(test);

    return (
      <ul>
        {rates.map((rate) => (
          <li key={rate.id}>{rate.name}</li>
        ))}
        {/* Object.keys(items.rates).map((key, index) => (
        <li key={index}>
          Country Code: {key}, Rate: {items.rates[key]}
        </li> */}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  rates: state.rates.items,
  loading: state.rates.loading,
  error: state.rates.error
});

// items: action.payload.products;

export default connect(mapStateToProps)(ExchangeRateList);
