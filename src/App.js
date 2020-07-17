import React from 'react';
import './App.css';
import BurgerContainer from './components/BurgerContainer.js';
import IngredientContainer from './components/IngredientContainer.js';


function App(props) {
  return (
    <>
      <h1>Burger Stacker</h1>
      <IngredientContainer appData={props.appData}/>
      <BurgerContainer appData={props.appData}/>
    </>
  );
}

export default App;
