import React from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return <div className="App"></div>;
  }
}

// const mapStateToProps = state => {

//   return { state: state };
// };

export default connect()(App);
