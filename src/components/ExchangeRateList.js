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

    if (loading) {
      return <div>Loading...</div>;
    }

    // console.log(items);
    // let rates = items.rates;
    // console.log(rates);

    // let test2 = Object.keys(items);
    // console.log(test2);

    // let rates = items.rates;
    // console.log(rates);

    // console.log(this.props);
    console.log(items);
    console.log(Object.keys(items));
    // let test = Object.(data);
    // console.log(test);

    // let test = Array(data);
    // console.log(test);

    // let test = Object.entries(items)[1];
    // console.log(test);

    // let test = items.rates;
    // console.log(test);

    // let otherTest = items;
    // console.log(otherTest);

    // let fgh = Object.keys(items);
    // console.log(fgh);
    // const result = Object.keys(items.rates).map((item, index) => (
    //   <li key={index}>
    //     {item[0]} = {item[1]}
    //   </li>
    // ));

    // const result = JSON.stringify(items.rates);
    // console.log(result);
    // let output = Object.keys(items.rates).map((key) => {
    //   return {
    //     key: key,
    //     value: items.rates[key]
    //   };
    // });

    console.log(items.rates);

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
        {/* <ul>
          {Object(items.rates).map((item, index) => (
            <li key={index}>
              {item[0]} = {item[1]}
            </li>
          ))}
        </ul> */}

        {/* {Object.keys(items).map((key, index) => (
          <li key={index}>
            {" "}
            {key}: {items[key]}
          </li>
        ))} */}
        {/* {Object.values(items.rates).map((item, index) => (
          <li key={index}>
            {item[0]} = {item[1]}
          </li>
        ))} */}

        {/* <p>rates are: {items.rates.CAD}</p> */}
        {/* {Object.keys(data)} */}
        {/* let otherTest = Object.values(items);
        console.log(otherTest);

        let otherEnt = Object.entries(items);
        console.log(otherEnt); */}

        {/* <ul>
          {Object.keys(items.rates).map((key, index) => (
            <li key={index}>
              Country code: {key}, Rate: {items.rates[key]}
            </li>
          ))}
        </ul> */}
        {/* <ul>
          {Object(items.rates).map((item, index) => (
            <li key={index}>
              {item[0]} = {item[1]}
            </li>
          ))}
        </ul> */}
        {/* <ul>
          {Object.entries(items.rates).map((item, index) => (
            <li key={index}>
              {item[0]} = {item[1]}
            </li>
          ))}
        </ul> */}
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
