import React from 'react';
import ingredientData from './ingredientData'; 
import IngredientList from './IngredientList';
import BurgerStack from './BurgerStack';

import './style.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="display-panel-container">

        <div className="display-panel">
          <IngredientList ingredientData={ ingredientData } />
        </div>

        <div className="display-panel">
          <BurgerStack ingredientData={ ingredientData } />
        </div>

      </div>
    </div>
  );
}

export default App;
