import React, { useState } from 'react';
import './App.css';
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

function App() {
  const [burger, setBurger] = useState([])

  return (
    <div className="App">
      <IngredientList />
      <BurgerPane />
    </div>
  );
}

export default App;
