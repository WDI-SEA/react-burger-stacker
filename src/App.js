import React from 'react';
import IngredientsList from './IngredientsList.js'
import BurgerPane from './BurgerPane.js'

export default function App({ingredients}) {
    return (
      <div className="App">  
        <h1>Greetings, burger-lover!</h1>
        <IngredientsList ingredients={ingredients}/>
        <BurgerPane />
      </div>
  )
}