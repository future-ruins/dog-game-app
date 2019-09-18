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
    console.log(randomImage);
    return <h1>Hello gamer</h1>;
  }
}

const mapStateToProps = state => {
  return { state: state.gameOneReducer };
};

export default connect(
  mapStateToProps,
  { getDogs, getRandomDog }
)(GameOne);
