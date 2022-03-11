import React, { Component } from 'react';
import './App.css';
import BurgerPane from './BurgerPane';
import ClearBurger from './ClearBurger';
import IngredientList from './IngredientList';


class BurgerStacker extends Component {
  state = { 
    burgerIngredients: [],
    ingredients: [
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ]
  } 

  clickHandler = (e) =>{
      const ingredientName = e.target.innerText
      console.log(ingredientName)
      this.setState({
        burgerIngredients: [
        ingredientName, ...this.state.burgerIngredients]
      })
  }

  clearBurger = () => {
    console.log('clear burger')
    this.setState({burgerIngredients: []})
  }

  render() { 
    return (
      <>
      <h1>Burger Stacker</h1>
      
        <IngredientList addIngredient={this.clickHandler}
        ingredients={this.state.ingredients}
         />
        
        <BurgerPane clearBurger={this.clearBurger} burgerIngredients={this.state.burgerIngredients}/>

        
      </>
    );
  }
}
 
export default BurgerStacker;


