import React, { Component } from 'react';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

export default class App extends Component {
  
state = {
  burgerIngredients: []
}

clearBurger = () => {
  this.setState({burgerIngredients: []})
}

addToBurger = (ingredient) => {
  // add the selected burger to the burgerIngredients state
  // push the new ingredient to the burger
 let newBurgerList = this.state.burgerIngredients
 newBurgerList.unshift(ingredient)
 this.setState({burgerIngredients: newBurgerList})
}

  render() {
    return( // can't return more than one jsx element
    <>
      <h1>Burger Stacker</h1>
      <main>
        <IngredientList ingredients={this.props.ingredientsList} addToBurger={this.addToBurger}/>
        <BurgerPane 
        burgerIngredients={this.state.burgerIngredients}
        clearBurger={this.clearBurger}
        />

      </main>
    </>
    )
  }
}