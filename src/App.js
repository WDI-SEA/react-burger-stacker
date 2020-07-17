import React, { useState } from 'react';
import './App.css';
import BurgerPane from "./BurgerPane";
import IngredientList from "./IngredientList";

function App() {
  // an array of ingredient data
  // this is the thing that is changing
  let burgerSeed = [
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

  // use the useState hook to set the initial ingredients to be stacked to 
  // an empty array - that way we can fill it with stackable toppings
  const [ingredients, setIngredients] = useState(burgerSeed)
  const [burgerPaneIngredients, setBurgerPaneIngredients] = useState([])

  //handle the data event
  const addToStack = (e) => {
    //we are going to pass down this function as property
    console.log(`Ingredient was clicked!`)
    //get burgerSeed ingredient from user click event on Ingredient List li
    let result = e.target.innerText;
    //add clicked burger seed ingredient to my setBurgerPaneIngredients
    //accomplish this with a modifier/built in ES6 syntax called spread operator
    //I don't want a nested array, I want to access individual values
    setBurgerPaneIngredients([result, ...burgerPaneIngredients])
    console.log(burgerPaneIngredients)
  }

  // return the functions to render the components we call upon
  return (
    // begin JSX expression
    <div className="App">
      {/* these brackets indicate the opening of another expression, a JS expression
      that is how we define JS within JSX */}
      {/*  */}
      <IngredientList ingredients={ingredients} action={addToStack}/>
      <BurgerPane ingredients={burgerPaneIngredients}/>
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
