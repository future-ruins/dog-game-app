import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    const dogBreeds = this.props.dogBreeds; // child component using data from store
    //console.log("LIST OF BREEDS", dogBreeds);
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
