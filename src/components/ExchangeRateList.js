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

  simpleAction = (e) => {
    this.props.simpleAction();
  };

  render() {
    const { error, loading, items } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading || !items.rates) {
      return <div>Loading...</div>;
    }

    console.log(items);
    console.log(Object.keys(items.rates));

    // console.log(this.props);
    // console.log(items.rates);

    return (
      <div>
        {/* {console.log(items.rates)} */}
        <p>The base rate is: {items.base}</p>
        {/* {output} */}
        <ul>
          {Object.keys(items.rates).map((key, index) => (
            <li key={index}>
              Country code: {key}, Rate: {items.rates[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.data.items,
  loading: state.data.loading,
  error: state.data.error
});

// console.log(items);

// items: action.payload.products;

export default connect(mapStateToProps)(ExchangeRateList);
