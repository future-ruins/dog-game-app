// Retrieves nad handles the data:
// Container Component

import React, { Component } from "react";
import request from "superagent";
import DogsList from "./DogsList";
import { connect } from "react-redux";

class DogsListContainer extends Component {
  state = { dogBreeds: null };

  // componentDidMount() {
  //     request
  //     .get('https://dog.ceo/api/breeds/list/all')
  //     .then(response => {
  //         const breeds = Object.keys(response.body.message)
  //         //console.log(breeds)
  //         this.updateBreeds(breeds)
  //     })
  //     .catch(console.error)
  // }

  // updateBreeds(breeds) {
  //     this.setState(
  //         { dogBreeds : breeds }
  //     )
  // }

  render() {
    // OLD WAY: return <DogsList dogBreeds={this.state.dogBreeds} />;
    console.log("this.props.state", this.props.state);
    return <DogsList dogBreeds={this.props.state} />;
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(DogsListContainer);
