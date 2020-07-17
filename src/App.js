import React, { useState } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import ingredientsData from './ingredientsData'

function App() {

  const [addedIngredients, setAddedIngredients] = useState([])

  const addIngredient = (ingredient) => {
    setAddedIngredients([ingredientsData[ingredient.target.value], ...addedIngredients])
    console.log(ingredient.target.value)
    console.log(addedIngredients)
  }

  const resetIngredients = () => {
    setAddedIngredients([])
    // console.log(addedIngredients)
  }


  return (
    <div className="App">
      <IngredientList ingredientsData={ingredientsData} addIngredient={addIngredient} />
      <BurgerPane addedIngredients={addedIngredients} resetIngredients={resetIngredients} />
    </div>
  );
}

export default App;