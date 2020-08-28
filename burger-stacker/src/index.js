import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Burger from './Burger/BurgerPane';
import IngredientsList from './Ingredients/IngredientsList';
import BurgerStack from './Burger/BurgerStack'



ReactDOM.render(
  <React.StrictMode>
    <IngredientsList />
  </React.StrictMode>,
  document.getElementById('root')
);