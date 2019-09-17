import React, { Component } from "react";
import request from "superagent";
import DogsList from "./DogsList";
import { connect } from "react-redux";

class DogsListContainer extends Component {
  state = { dogBreeds: null };

  render() {
    // OLD WAY: return <DogsList dogBreeds={this.state.dogBreeds} />;
    //console.log("this.props.state", this.props.state);
    return <DogsList dogBreeds={this.props.state} />;
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(DogsListContainer);
