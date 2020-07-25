import React from 'react';
import './App.css';
import IngredientContainer from './Ingredient'
import Burger from './Burger'

function App() {
  return (
    <div className="App">
      <div className="ingredient-list">
        <IngredientContainer />
      </div>
      <div className="burger">
        <Burger />
      </div>
    </div>
  );
}

export default App;