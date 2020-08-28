import React, { useState } from 'react';
import './App.css';
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

function App() {
  const [burger, setBurger] = useState([])

  const addIngredient = (ing) => {
    console.log(burger)
    return setBurger(burger.concat(ing))
  }

  return (
    <div className="App">
      <IngredientList addIngredient={addIngredient}/>
      <BurgerPane />
    </div>
  );
}

export default App;
