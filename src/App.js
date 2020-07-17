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
  const [pantry, setPantry] = useState(APP_DATA);
  const clearStack = () => {
    setStackOrder([]);
  }
  const pileHigh = (newIngredient) => {
    setStackOrder([newIngredient, ...stackOrder])
  }
  const removeLayer = () => {
    let newStackOrder = stackOrder.slice(1);
    setStackOrder(newStackOrder);
  }
  const addToPantry = (e) => {
    e.preventDefault();
    console.log("Adding ", e.target.name.value);
    setPantry([...pantry, {name: e.target.name.value, color: e.target.color.value}]);
  }
  return (
    <>
      <h1>Burger Stacker</h1>
      <IngredientContainer appData={pantry} addToPantry={addToPantry} pileHigh={pileHigh}/>
      <BurgerContainer 
        appData={pantry} 
        stackOrder={stackOrder} 
        clearStack={clearStack} 
        removeLayer={removeLayer}
      />
    </>
  );
}

export default App;
