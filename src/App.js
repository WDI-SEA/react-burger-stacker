import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const ingredientListing =  [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: '"Cheese"', color: 'goldenrod'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'},
  {name: 'Jalapenos', color: 'green'}
]

const App = () => {
  const [ingredients, setIngredients] = useState([])

  const addToBurger = (e) => {
    // get value of clicked ingredient and colour
    let newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}

    // create a new array with current clickedIngredients status and append new ingredient
    let burgyTime = ingredients.concat(newIngredient)

    setIngredients(burgyTime)
  }

  const clearBurger = () => {
    setIngredients([])
  }

    return (
      <div style={{display: "flex", alignItems:"flex-end"}}>
        <IngredientList ingredients={ingredientListing} addToBurger={addToBurger}/>
        <BurgerPane burgerIngredients={ingredients} clearBurger={clearBurger}/>
      </div>
    )
  }

export default App