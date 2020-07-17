import React, { useState } from 'react'
import Burger from './Burger'

const Ingredients = (props) => {
  const [ingredientsAdded, setIngredientsAdded] = useState([]);
 

  const addIngredient = (e, ingredient) => {
    ingredientsAdded.push(ingredient)
    console.log(ingredientsAdded)
    setIngredientsAdded([...ingredientsAdded])
  }

  return (
    <div>
      <ul>
        {props.ingredientsList.map(ingredient => (
          <li key={ingredient.name}>{ingredient.name} <button onClick={(e) => {
            addIngredient(e, ingredient)}} value={ingredient.name}>></button></li>
        ))}
      </ul>
      <Burger ingredientsAdded={ingredientsAdded} />
    </div>
  )
}

export default Ingredients;