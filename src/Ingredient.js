import React, { Component } from 'react';


class Ingredient extends Component {
  render () {
    return (
        <li key={this.props.key}> 
        {this.props.item.name} 
        
        <button value={this.props.item.name} onClick={(e) => this.props.updateIngredient(e)} >click me</button>
        </li>
    )
  }
};

export default Ingredient;