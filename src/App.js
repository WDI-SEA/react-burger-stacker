import React, { Component } from "react";
import IngredientList from "./Ingredientlist";
import Ingredient from "./Ingredient";
import BurgerPane from "./BurgerPane"
import './App.css';

const ingredients = 
[
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

export default class App extends Component {
  state = {
    //array of burger ingredients clicked on
    burgerIngredients: [],
  }
  handleIngredientClick = ingredient => {
    console.log(ingredient.name)
  }
  render() {
    return(
      <>
        <IngredientList 
      ingredients = {ingredients}
      handleIngredientClick = {this.handleIngredientClick}
      />
        <BurgerPane 
          
        />
      </>
      
    )
  }
  
}