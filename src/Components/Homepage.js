import React from "react";
import illustrationOne from "../Images/illustrationOne.png";
import illustrationTwo from "../Images/illustrationTwo.png";

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="welcomeImage">
        <br></br>
        <br></br>
        <img id="illustrations" src={illustrationOne} alt="dogs illustration" />
        <br></br>
        <h1>Have fun learning about dogs!</h1>
        <p>
          Check out our list of dogs to see
          <br></br>
          all the dog breeds in the world! Do you know them all?
          <br></br>
          <br></br>
          Play the games to test your knowledge!
        </p>
        <br></br>
        <img id="illustrations" src={illustrationTwo} alt="dogs illustration" />
      </div>
    );
  }
}
