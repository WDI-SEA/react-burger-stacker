import React, { Component } from 'react';


class ClearBurger extends Component {
  render () {
    return (
      <button onClick={(e) => this.props.clearIngredients(e)} >Clear</button>
    )
  }
};

export default ClearBurger;