import React, { Component } from "react";
import DogBreedImages from "./DogBreedImages";
import request from "superagent";
import { connect } from "react-redux";
import QuizOne from "./QuizOne";

export default class QuizOneContainer extends Component {
  state = { images: null };

  componentDidMount() {
    const breed = this.props.match.params.breed;
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => this.updateImages(response.body.message))
      .catch(console.error);
  }

  updateImages(images) {
    const tenImages = images.slice(0, 1);
    this.setState({
      images: tenImages
    });
  }

  render() {
    console.log("Container props test:", this.props);
    return <QuizOne match={this.props.match} images={this.state.images} />;
  }
}

// const mapStateToProps = state => {
//   // console.log("STATE OF REDUX STORE", state);
//   return { state: state };
// };

// export default connect(mapStateToProps)(DogBreedImagesContainer);
