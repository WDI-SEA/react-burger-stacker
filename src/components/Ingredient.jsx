import React, { Component } from 'react';

class Ingredient extends Component {
  render () {
    // let content; 
    if (this.props.ingredient){

      return (
      <span style={{backgroundColor: this.props.ingredient.color}} >{this.props.ingredient.name}</span>
        
      )
    } else{
      return <span> not working</span>
    }
  }
};

export default Ingredient; 

