import React, { Component } from "react";
import "./styles/App.css";
import search from "./Components/search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search Results</h1>
        </header>
        <p className="App-intro">{search}</p>
      </div>
    );
  }
}

export default App;
