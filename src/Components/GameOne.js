import React from "react";
import { connect } from "react-redux";
import { getDogs, getRandomDog } from "../Actions/getDogs";
import { Link } from "react-router-dom";

class GameOne extends React.Component {
  componentDidMount() {
    this.props.getDogs();
    this.props.getRandomDog();
  }

  render() {
    const randomImage = this.props.state;
    console.log("randomImage is:", randomImage);
    return (
      <div className="randomDogImage">
        <h1>Hello gamer, here's a random dog image</h1>
        <img src={randomImage} alt="Dog" />
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
