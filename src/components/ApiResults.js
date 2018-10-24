import React from "react";
import RequestExchange from "./RequestExchange";

class ApiResults extends React.Component {
  render() {
    const { details } = this.props;

    return { details };
  }
}

export default ApiResults;
