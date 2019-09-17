import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import DogsListContainer from "./Components/DogsListContainer";
import DogBreedImagesContainer from "./Components/DogBreedImagesContainer";
import request from "superagent";

class App extends React.Component {
  componentDidMount() {
    request
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then(response =>
        //console.log("response body.message", response.body.message)
        this.props.dispatch({
          type: "FETCH_DATA",
          payload: Object.keys(response.body.message)
        })
      )
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={DogsListContainer} />
          {/* :breed is a parameter!! IF THIS PARAMETER IS AT THE END OF
      THE PATH SHOW THIS COMPONENT */}
          <Route
            path="/dog-breeds/:breed"
            component={DogBreedImagesContainer}
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE OF REDUX STORE", state);

  return { state: state };
};

export default connect(mapStateToProps)(App);
