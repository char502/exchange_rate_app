import React from "react";
import ApiResults from "./ApiResults";

const apiUrl =
  "http://data.fixer.io/api/latest?access_key=ff94c304d79ade79928ce736041bfd70";

class RequestExchange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch(apiUrl)
      .then((response) =>
        this.setState({
          isLoaded: true,
          data: response.data
        })
      )
      .catch((error) => console.log(error));
  }
  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  // }
  render() {
    let { isLoaded, items } = this.state;

    console.log(this.state);
    // console.log(items);
    // let rates = items.rates;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p>Item has loaded!</p>
          <ul>
            {/* {items.map((obj) => {
              return <li>{obj.rates}</li>;
            })} */}
          </ul>
          />
        </div>
      );
    }
  }
}

export default RequestExchange;

// const requestExchange = () => {
//     const url = http://data.fixer.io/api/latest?access_key=ff94c304d79ade79928ce736041bfd70

//     fetch(url)
//         .then((response) => {
//             if (Response.ok) {
//                 return response.json()
//             } else {
//                 throw Error(response.statusText);
//             }
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch(() => {
//             console.log('An Error Occured');
//         });
// }
