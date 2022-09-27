import React, {Component} from 'react';

export default class Ingredients extends Component {
  render(){
    return(
        <button style={{color: this.props.color}} value={this.props.ingredient} onClick={this.props.addIngredient}>{this.props.ingredient}</button>
    )
  }
}