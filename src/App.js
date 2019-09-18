import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DogsList from "./Components/DogsList";

function Index() {
  return <h2>Home</h2>;
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dogs/">Dog List</Link>
                </li>
                <li>
                  <Link to="/game1/">Start Game</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/dogs/" component={DogsList} />
            {/* <Route path="/game1/" component={Game1} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
