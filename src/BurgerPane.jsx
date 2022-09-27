import React, {Component} from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';
export default class BurgerPane extends Component {
  render(){
    const ingredients = this.props.burgerIngredientsArray
    return(
      <div className="column2">
        <ClearBurger />
        <BurgerStack 
        burgerIngredients={ingredients}/>
      </div>
    )
  }
}