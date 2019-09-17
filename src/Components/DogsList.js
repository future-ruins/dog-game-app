// Handles the display of data, only contains markup: 
// Presentational Component

import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class DogsList extends Component {
    // does it have to be render or would another name such as
    // displayDogBreed still work?

    renderDogBreed(breed) {
        return <li key={breed}>{breed}</li>
    }

    render() {
        const { dogBreeds } = this.props
        //console.log(dogBreeds)
        return (
             <div className="dogs-list">
                 <h1>Dogs List</h1>

                 { !dogBreeds && 'Loading...'}

                 {
                     dogBreeds && 
                     <ul>{ dogBreeds.map(breed => 
                        <li key={breed}>
                        <Link to={ `/dog-breeds/${breed}` }>{breed}></Link>
                        </li>)}</ul>
                 }

             </div>
        );
    }


   
  };

  