import React from "react";
import { connect } from "react-redux";
import { getDogs, getRandomDog } from "../Actions/getDogs";
import { Link } from "react-router-dom";
import _ from "lodash";
import GameOneShowAnswer from "./GameOneShowAnswer";


class GameOne extends React.Component {
  componentDidMount() {
    this.props.getDogs();
  }

  retrieveRandomDogImage = () => {
    this.props.getRandomDog();
    this.getRandomDogNameFromDogList()
  }

  getRandomDogNameFromDogList = () => {
    const dogName = this.props.dogsList
    // console.log('dogName:', dogName)
    const arrayOfRandomDogNames = _.shuffle(dogName)
    return _.sample(arrayOfRandomDogNames)
  }

  render() {
    const randomImage = this.props.gameOne;
    console.log('randomImage test:', this.props.gameOne)
    console.log('randomImage test image/breed in GAME ONE:', this.props.gameOne)
    const question = randomImage && <div>
      <img src={randomImage} alt="" />
      <GameOneShowAnswer />
    </div>
    return (
      <div className="randomDogImage">
        <h2>Hello gamer!</h2>
        <h2>Ready for game one!</h2>
        <button onClick={this.retrieveRandomDogImage}>Start!</button>
        <br></br>
        <br></br>
        {question}
      </div>
    );
  }
}

const mapStateToProps = state => { // each prop will have the value you give it. -> which means, the state of the reducer.
                                  // the prop can have any name you give it. but makes it accessible in the component as props.propname ie props.gameOne (gives you state from GameOne reducer
  return {
    gameOne: state.gameOneReducer,
    dogsList: state.dogsList,
  };
};

export default connect(
  mapStateToProps,
  { getDogs, getRandomDog }
)(GameOne);
