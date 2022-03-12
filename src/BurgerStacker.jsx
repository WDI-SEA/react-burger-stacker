import React, { useState } from 'react';
import './App.css';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

export default function BurgerStacker({ingredientList}){

  const [burgerIngredient, setBurger] = useState([])
  
  const addToBurger = (ingredient) => {
    setBurger([ingredient, ...burgerIngredient])
  }


  const clearBurger = () => {
    setBurger([])
  }

  return(
    <div>

      <h1>Burger Stacker</h1>
      <IngredientList 
      addToBurger={addToBurger}
      ingredients={ingredientList}/>
      
      <BurgerPane 
      clearBurger={clearBurger} 
      burgerIngredients={burgerIngredient}/> 

     </div>
  
  )
  
}


