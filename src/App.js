import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DogsList from "./Components/DogsList";
import DogListImages from "./Components/DogListImages";
import GameOne from "./Components/GameOne";

function Index() {
  return <h2>Home</h2>;
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <nav>
              <Link to="/">Home</Link>

              <Link to="/dogs/">Dogs List</Link>

              <Link to="/game-one/">Game 1</Link>
            </nav>
          </header>
          <main>
            <Route path="/" exact component={Index} />
            <Route path="/dog-breeds/:breed" component={DogListImages} />
            <Route path="/dogs/" component={DogsList} />
            <Route path="/game-one/" component={GameOne} />
          </main>
          <footer>
            <p>version 1</p>
          </footer>
        </Router>
      </div>
    );
  }
}

export default App;
