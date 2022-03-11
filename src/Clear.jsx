import './App.css';
import React, { Component } from 'react'
import Ingredient from './Ingredient';

class Clear extends Component {
  render() {
    return (
        <button onClick={this.props.clearBurger}>Start Over</button>
    )
  }
}

export default Clear;