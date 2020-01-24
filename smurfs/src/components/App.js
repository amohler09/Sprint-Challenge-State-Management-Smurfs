import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList'
import { SmurfForm } from "./smurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
