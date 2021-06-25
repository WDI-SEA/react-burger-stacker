// Import React and React Component
import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

export default function App () {
  const [burgerIngredients, setBurgerIngredients] = useState([])

  const addToBurger = (e) => {
    // Get value of clicked ingredient and color
    let newIngredient = {
      name: e.target.innerText, 
      color: e.target.style.backgroundColor
    }

    // Create new array with current clickedIngredients status and append new ingredient
    let newBurger = burgerIngredients.concat(newIngredient)
    
    // setState with new clickedIngredients array
    setBurgerIngredients(newBurger)
  }

  const clearBurger = (e) => {
    setBurgerIngredients([])
  }

  return (
    <div style={{display: "flex", alignItems: "flex-end"}}>
      <IngredientList ingredients={ingredients} addToBurger={addToBurger}/>
      <BurgerPane burgerIngredients={burgerIngredients} clearBurger={clearBurger} />
    </div>
  )
}