import React from "react";
import { connect } from "react-redux";
import { getDogs, getImages } from "../Actions/getDogs";
import { Link } from "react-router-dom";

class DogsListImages extends React.Component {
  componentDidMount() {
    this.props.getDogs();
    this.props.getImages();
  }

  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    const images = this.props.state;
    console.log("state:", images);
    return (
      <div className="dog-breed-images">
        <h1>Dogs Breed Images</h1>
        This page will show images of the {this.props.match.params.breed} breed.
        <Link to="/dogs">Go back to the list</Link>
        <div>
          {console.log(images)}
          {images &&
            images.map(urlImage => (
              <img key={urlImage} src={urlImage} alt="Dog" />
            ))}
          {!images && "Loading..."}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state.imagesReducer };
};

export default connect(
  mapStateToProps,
  { getDogs, getImages }
)(DogsListImages);