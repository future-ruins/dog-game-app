import React from "react";

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="welcomeImage">
        <h2>Welcome! Are you ready to have fun with dogs?
          <br></br>
          <br></br>
            Check out our dogs list. Here we list all the
          <br></br>
            dog breeds in the world! Do you know them all?
          <br></br>
          <br></br>
            Play the games to test your knowledge!</h2>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8077ed19827641.562e0efbbaf83.jpg"
          alt="dogs illustration"
        />
      </div>
    );
  }
}
