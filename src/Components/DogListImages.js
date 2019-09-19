import React from "react";
import { connect } from "react-redux";
import { getDogs, getImages } from "../Actions/getDogs";
import { Link } from "react-router-dom";

class DogsListImages extends React.Component {
  componentDidMount() {
    this.props.getDogs();
    this.props.getImages(this.props.match.params.breed); // function argument
  }

  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    const images = this.props.state;
    console.log("hello?", this.props.state);
    //console.log("state:", images);
    return (
      <div className="dog-breed-images">
        <h1>The {this.props.match.params.breed}</h1>
        <p>
          On this page you can see what {this.props.match.params.breed} dogs
          look like.
        </p>
        <div className="images">
          {/* {console.log(images)} */}
          {images &&
            images.map(urlImage => (
              <img key={urlImage} src={urlImage} alt="Dog" />
            ))}
          {!images && "Loading..."}
        </div>
        <Link to="/dogs">
          <p>Bring me back to the list</p>
        </Link>
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
