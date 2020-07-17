import React, { useState } from 'react';
import './App.css';
import BurgerContainer from './components/BurgerContainer.js';
import IngredientContainer from './components/IngredientContainer.js';


function App() {
  
  const APP_DATA = [
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
  ];
 
  const [stackOrder, setStackOrder] = useState([]);
  const clearStack = () => {
    setStackOrder([]);
  }
  const pileHigh = (newIngredient) => {
    setStackOrder([newIngredient, ...stackOrder])
  }
  return (
    <>
      <h1>Burger Stacker</h1>
      <IngredientContainer appData={APP_DATA} pileHigh={pileHigh}/>
      <BurgerContainer appData={APP_DATA} stackOrder={stackOrder} clearStack={clearStack}/>
    </>
  );
}

export default App;
