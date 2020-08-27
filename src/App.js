import React, { useState } from 'react';
import './App.css';
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

function App() {
  const [burger, setBurger] = useState([])
  
  return (
    <div className="App">
      <BurgerPane />
      <IngredientList />
    </div>
  );
}

export default App;
