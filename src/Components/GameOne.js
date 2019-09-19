import React from "react";
import { connect } from "react-redux";
import { getDogs, getRandomDog } from "../Actions/getDogs";
import { Link } from "react-router-dom";

class GameOne extends React.Component {
  componentDidMount() {
    this.props.getDogs();
  }

  retrieveRandomDogImage = () => {
    this.props.getRandomDog();
  }
  
  render() {
    const randomImage = this.props.state;
    console.log("randomImage is:", randomImage);
    return (
      <div className="randomDogImage">
        <h2>Hello gamer!</h2>
        <h2>Ready for game one!</h2>
        <button onClick={this.retrieveRandomDogImage}>Start!</button>
        <br></br>
        <br></br>
        <img src={randomImage} alt="" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state.gameOneReducer };
};

export default connect(
  mapStateToProps,
  { getDogs, getRandomDog }
)(GameOne);
