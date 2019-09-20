import React from "react";
import { connect } from "react-redux";
import { getDogs, getRandomDog } from "../Actions/getDogs";
import { addCount } from '../Actions/scoreAction'
//import { Link } from "react-router-dom";
import _ from "lodash";
import GameOneShowAnswer from "./GameOneShowAnswer";
import scoreReducer from "../Reducers/scoreReducer";

class GameOne extends React.Component {
  componentDidMount() {
    this.props.getDogs();
  }

  retrieveRandomDogImage = () => {
    this.props.getRandomDog();
    this.getRandomDogNameFromDogList();
  };

  getRandomDogNameFromDogList = () => {
    const dogName = this.props.dogsList;
    const arrayOfRandomDogNames = _.shuffle(dogName);
    return _.sample(arrayOfRandomDogNames);
  };


handleClickCount = () => {
  this.retrieveRandomDogImage()
  // const actionCount = {
  //   type : "COUNT",
  //   payload: this.props.scoreState.count + 1
  // }
  //this.props.addCount(this.props.scoreState.count)
}
  // onClick = {
  //   const action = {
  //     type : "SCORE",
  //     payload : 
  //   }
  // }
  // this.retrieveRandomDogImage
  render() {
    const startGame = !this.props.dogName && (<div className="randomDogImage">
        <h1>Ready for game one?</h1>
        <button onClick={this.handleClickCount}>Show me a dog</button>
        <br></br>
        <br></br>
      </div>
    );
    
    const randomImage = this.props.gameOne;

    const question = randomImage && (
      <div>
        <GameOneShowAnswer />
      </div>
    );

    return (
      <div >
        { randomImage ? question : startGame }
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
  { getDogs, getRandomDog, addCount }
)(GameOne);
