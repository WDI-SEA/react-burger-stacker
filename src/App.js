import React, { useState } from 'react';
import ingredientData from './ingredientData'; 
import IngredientList from './IngredientList';
import BurgerStack from './BurgerStack';

import './style.css';
import './App.css';

function App(props) {

  let [burgerIngredients, setBurgerIngredients] = useState([]);

  const addIngredient = (e) => {
    setBurgerIngredients([ingredientData[e.target.value], ...burgerIngredients]);
    // console.log(e.target.value)
    // console.log(burgerIngredients)
  }

  const clearBurger = () => {
    setBurgerIngredients([])
  }

  //console.log('app', props);

  return (
    <div className="App">
      <div className="display-panel-container">

        <div className="display-panel">
          <IngredientList ingredientData={ ingredientData } addIngredient={ addIngredient } />
        </div>

        <div className="display-panel">
          <BurgerStack burgerIngredients={ burgerIngredients }  clearBurger={ clearBurger } />
        </div>

      </div>
    </div>
  );
}

export default App;
