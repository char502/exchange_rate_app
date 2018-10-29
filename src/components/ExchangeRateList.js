import React from "react";
import { connect } from "react-redux";
import { fetchRates } from "../actions/ratesActions";

// import { ratesReducer } from "../reducers/index";
// import * as actionCreators from "../actions/index";
// import { createStore } from "redux";

// import { items, loading, error } from "./ratesReducer";

class ExchangeRateList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRates());
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

// console.log(rates);

// items: action.payload.products;

export default connect(mapStateToProps)(ExchangeRateList);
