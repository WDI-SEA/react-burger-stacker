import React, {Component} from 'react';
export default class BurgerIngredients extends Component {
  render(){
    return(
      <p>{this.props.ingredient}</p>
    )
  }
}