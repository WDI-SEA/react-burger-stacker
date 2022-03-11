import React, { Component } from 'react';
import './App.css';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

class BurgerStacker extends Component {

  state = { 
    burgerIngredients: []
  } 

  addToBurger = (ingredient) =>{
    this.setState((prevState, props)=>({
      burgerIngredients: [ingredient, ...prevState.burgerIngredients]
    }))
  }

  clearBurger = () => {
    this.setState({burgerIngredients: []})
  }

  render() { 
    return (
      <div>

        <h1>Burger Stacker</h1>
          <IngredientList 
          addToBurger={this.addToBurger}
          ingredients={this.props.ingredientList}/>
          
          <BurgerPane 
          clearBurger={this.clearBurger} 
          burgerIngredients={this.state.burgerIngredients}/> 
      </div>
    
    );
  }
}
 
export default BurgerStacker;


