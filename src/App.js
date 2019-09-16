import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

class App extends React.Component {
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

// const mapStateToProps = state => {

//   return { state: state };
// };

export default connect()(App);
