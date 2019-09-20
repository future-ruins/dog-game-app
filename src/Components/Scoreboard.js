import React from "react";
import { connect } from "react-redux";
import {
  addCount,
  updateStreak,
  addScore,
  addWin
} from "../Actions/ScoreActions";

class Scoreboard extends React.Component {
  render() {
    return (
      <p>
        Score: {this.props.scoreState.score}
        <br></br>
        Streak: {this.props.scoreState.streak}
        <br></br>
        WinPercent: {this.props.scoreState.winPercent.toFixed(2)}%<br></br>
        Level: {this.props.scoreState.level}
      </p>
    );
  }
}

const mapStateToProps = state => {
  return {
    scoreState: state.scoreReducer
  };
};

export default connect(
  mapStateToProps,
  { addCount, updateStreak, addScore, addWin }
)(Scoreboard);
