import React from "react";
import { connect } from "react-redux";
import { getDogs, getRandomDog } from "../Actions/getDogs";
import { addCount, updateStreak, addScore,addWin } from '../Actions/scoreAction'
import { Link } from "react-router-dom";
import _ from "lodash";
import { setTimeout } from "timers";
import "./GameOneShowAnswer.css";

// const randomDogName1 = this.getRandomDogNameFromDogList()
// const randomDogName2 = this.getRandomDogNameFromDogList()
// const correctDog = this.randomDogBreedName
// const answers = [randomDogName1, randomDogName2, correctDog]
// const shuffledAnswers = _.shuffle(answers)
// console.log('hello??', shuffledAnswers)

class GameOneShowAnswer extends React.Component {
  componentDidMount() {
    this.props.getDogs();
  }

  retrieveRandomDogImage = () => {
    this.props.getRandomDog();
    this.getRandomDogNameFromDogList();
  };

  getRandomDogNameFromDogList = () => {
    const dogName = this.props.dogsList;
    // console.log('dogName:', dogName)
    const arrayOfRandomDogNames = _.shuffle(dogName);
    return _.sample(arrayOfRandomDogNames);
  };

  handleClick = () => {
    alert("Correct!");
    this.props.addCount(this.props.scoreState.count)
    this.props.updateStreak(this.props.scoreState.streak + 1 )
    this.props.addScore(this.props.scoreState.score + 1)
    this.props.addWin()
    return this.retrieveRandomDogImage();
    
  };

  handleClickA = () => {
    alert(`Incorrect! The correct dog is ${this.props.gameOne.breed}.`);
    setTimeout(this.retrieveRandomDogImage, 2000);
    this.props.addCount(this.props.scoreState.count)
    this.props.updateStreak(0)
    return;
  };

  handleClickB = () => {
    alert(`Incorrect! The correct dog is ${this.props.gameOne.breed}.`);
    setTimeout(this.retrieveRandomDogImage, 2000);
    this.props.addCount(this.props.scoreState.count)
    this.props.updateStreak(0)
    return;
  };

  showCorrectAnswer = () => {};

  makeMyOptions = () => {
    const randomDogBreedName = this.props.gameOne.breed;

    const correctAnswer = (
      <h2 class="answer" onClick={this.handleClick}>
        {randomDogBreedName}
      </h2>
    );
    const wrongNameOne = (
      <h2 class="answer" onClick={this.handleClickA}>
        {this.getRandomDogNameFromDogList()}
      </h2>
    );
    const wrongNameTwo = (
      <h2 class="answer" onClick={this.handleClickB}>
        {this.getRandomDogNameFromDogList()}
      </h2>
    );

    const arrayOfOptions = [wrongNameOne, wrongNameTwo, correctAnswer];

    const shuffledArrayOfOptions = _.shuffle(arrayOfOptions);

    return shuffledArrayOfOptions;
  };

  render() {
    const randomImage = this.props.gameOne.image;
    return (
      <div className="randomDogImage">
        <h1>What kind of dog is this?</h1>
        <p>Select the correct dog breed from the options below:</p>
        <br></br>
        <br></br>
        {<img src={randomImage} alt="" />}
        <ul>{this.makeMyOptions()}</ul>

      </div>
    );
  }
}

const mapStateToProps = state => {
  // each prop will have the value you give it. -> which means, the state of the reducer.
  // the prop can have any name you give it. but makes it accessible in the component as props.propname ie props.gameOne (gives you state from GameOne reducer
  return {
    gameOne: state.gameOneReducer,
    dogsList: state.dogsList,
    scoreState: state.scoreReducer
  };
};

export default connect(
  mapStateToProps,
  { getDogs, getRandomDog, addCount, updateStreak, addScore, addWin }
)(GameOneShowAnswer);
