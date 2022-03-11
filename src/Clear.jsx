import React, { Component } from 'react';
import Ingredients from './Ingredient';

class Clear extends Component {
  state = {  } 
  render() { 
    return (
      <button onClick={this.props.clearBurger}>Clear Burger</button>
    );
  }
}
 
export default Clear;