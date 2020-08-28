import React, { useState } from 'react';
import './App.css';
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

function App() {
  const [burger, setBurger] = useState([])
  const [color, setColor] = useState([])

  const addIngredient = (ing) => {
    setBurger(burger.concat(ing))
  }
  

  const clearBurger = () => setBurger([])

  return (
    <div className="App">
      <IngredientList addIngredient={addIngredient}/>
      <BurgerPane burger={burger} clearBurger={clearBurger}/>
    </div>
  );
}

export default App;
