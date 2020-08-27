import React from 'react';
import './App.css';
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";

function App() {
  return (
    <div className={'display'}>
      <IngredientList/>
      <BurgerPane/>
    </div>
  );
}

export default App;
