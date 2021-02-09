import React, { useState, useEffect } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Tide Pod', color: '#3336FF'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]


// convert to named function
function App() {
  // useState
  const [burgerbits, setBurgerbits] = useState([]);
  
  // functions 
    //add ingredient 
  const addIngredient = () => {
    setBurgerbits([...burgerbits]);
  }
    // clear incredients
  const clearIngredients = () => {
    setBurgerbits([]);
  }
  
  return (
    <div>
    <h1>Burger Stacker</h1>
  <main className='panes'>
    <IngredientList ingredients={ingredients} />
    <BurgerPane burgerBits={burgerbits} />
  </main>
    </div>
  )
};



export default App;
