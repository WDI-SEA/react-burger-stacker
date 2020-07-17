import React, { useState } from 'react';
import './App.css';
import BurgerPane from "./BurgerPane";
import IngredientList from "./IngredientList";

function App() {
  // an array of ingredient data
  // this is the thing that is changing
  let [ingredients, initIngredients] = useState([
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
  ])

  // use the useState hook to set the initial ingredients to be stacked to 
  // an empty array - that way we can fill it with stackable toppings
  let [thenIngredients, setIngredients] = useState([])

  // return the functions to render the components we call upon
  return (
    // begin JSX expression
    <div className="App">
      {/* these brackets indicate the opening of another expression, a JS expression
      that is how we define JS within JSX */}
      {/*  */}
      <IngredientList ingredients={ingredients}/>
      <BurgerPane />
    </div>
    // end JSX expression
  );
}

export default App;

// JSX is a kind of expression
// for example, a string -> ""
// or an object, {},
// a function is an expression that begins with 
// function Name, () {} 
// JSX expression opens and closes with <>
// and everything inside must be contained within the symbols
// 
