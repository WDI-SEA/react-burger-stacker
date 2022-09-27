import React, {Component} from 'react';
export default class BurgerIngredients extends Component {
  render(){
    return(
      <p key={this.key} >{this.props.ingredient}</p>
    )
  }
}