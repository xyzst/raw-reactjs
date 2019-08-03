import {hot} from 'react-hot-loader/root';
import React, {Component} from 'react';
import Placeholder from "../components/Placeholder/Placeholder";
import classes from "./App.css"

class App extends Component {
  whatIsPI = () => {
    return Math.PI;
  };

  render() {
    return (
      <div>
        <h1>Hello from App.js (reactjs)!</h1>
        <Placeholder handler={this.whatIsPI}/>
      </div>
    );
  }
}

export default hot(App);