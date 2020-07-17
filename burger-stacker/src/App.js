import React, { useState } from 'react'
import './App.css'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

function App() {
  const ingredientsData = [
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

  const [addedIngredients, setAddedIngredients] = useState([])

  const addIngredient = (ingredient) => {
    setAddedIngredients([ingredient, ...addedIngredients])
  }

  const clearIngredients = () => {
    setAddedIngredients([])
  }

  return (
    <div className='container'>
      <IngredientList ingredientsData={ingredientsData} addIngredient={addIngredient} />
      <BurgerPane addedIngredients={addedIngredients} clearIngredients={clearIngredients} />
    </div>
  )
}

export default App
