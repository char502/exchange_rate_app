import React from "react";
import Title from "./Title";
import Clock from "./Clock";
// import RequestExchange from "./RequestExchange";
import ExchangeRateList from "./ExchangeRateList";

const Header = (props) => (
  <div>
    <Title title={props.title} />
    <Clock />
    {/* <RequestExchange /> */}
    <ExchangeRateList />
  </div>
);

export default Header;
