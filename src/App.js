import React from 'react';
import './App.css';
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

function App() {
  return (
    <div className="App">
      <BurgerPane />
      <IngredientList />
    </div>
  );
}

export default App;
