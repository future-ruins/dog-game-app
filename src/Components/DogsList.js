import React from "react";
import { connect } from "react-redux";
import { getDogs } from "../Actions/getDogs";
import { Link } from "react-router-dom";
import dogHeadShot from "../Images/dogHeadShot.png";

class DogsList extends React.Component {
  componentDidMount() {
    this.props.getDogs();
  }

  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    const dogBreeds = this.props.state;
    //console.log("Doglist state:", dogBreeds);
    return (
      <div className="dogs-list">
        <br></br>
        <img id="dogLogo" src={dogHeadShot} alt="dogs illustration" />
        <br></br>
        <h1>Show me the dogs!</h1>
        <h2>Click on a list item below to see pictures of a dog breed:</h2>

        {!dogBreeds && "Loading..."}

        {dogBreeds && (
          <ul>
            {dogBreeds.map(breed => (
              <li key={breed}>
                <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state.dogsList };
};

export default connect(
  mapStateToProps,
  { getDogs }
)(DogsList);
