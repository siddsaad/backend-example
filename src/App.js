import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signin/>
        <Signup/>
      </div>
    );
  }
}

export default App;
