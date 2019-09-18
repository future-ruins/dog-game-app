import React from "react";
import { connect } from "react-redux";
import { getDogs, getImages } from "../Actions/getDogs";
import { Link } from "react-router-dom";

class DogsList extends React.Component {
  componentDidMount() {
    this.props.getDogs();
    this.props.getImages();
  }

  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    const dogBreeds = this.props.state;
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        {!dogBreeds && "Loading..."}

        {dogBreeds && (
          <ul>
            {dogBreeds.map(breed => (
              <li key={breed}>
                <Link to={`/dog-breeds/${breed}`}>{breed}></Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(
  mapStateToProps,
  { getDogs, getImages }
)(DogsList);
