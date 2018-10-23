import React from "react";
import Title from "./Title";
import Clock from "./Clock";

const Header = (props) => (
  <div>
    <Title title={props.title} />
    <Clock />
  </div>
);

export default Header;
