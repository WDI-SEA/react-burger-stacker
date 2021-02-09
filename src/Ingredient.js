import React, { Component } from 'react';


class Ingredient extends Component {
  render () {
    let burgerIngredient = this.props.item
    return (
        <li key={this.props.key}> 
        {this.props.item.name} 
        
        <button value={burgerIngredient.name} onClick={(e) => this.props.updateIngredient(e)} >click me</button>
        </li>
    )
  }
};

export default Ingredient;