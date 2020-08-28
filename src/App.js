import React from 'react';
import IngredientsList from './IngredientsList.js'
import BurgerPane from './BurgerPane.js'

export default function App({ingredients}) {

  let addIng = (e) => {
    let newBurger = []
    ingredients.unshift(e.target.value)
    .then(response => {
      newBurger.push(e.target.value)
    })
  }

    return (
      <div className="App">  
        <h1>Greetings, burger-lover!</h1>
        <IngredientsList ingredients={ingredients} handleClick={addIng}/>
        <BurgerPane ingredients= {ingredients}/>
      </div>
  )
}