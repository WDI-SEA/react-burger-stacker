import React, { Component } from 'react';

class Ingredients extends Component {
  render() {
    return(
      <div>
        <h1 style={{backgroundColor: this.props.ingredient.color}}> {this.props.ingredient.name}</h1>
      </div>
    )
  }
}

export default Ingredients;