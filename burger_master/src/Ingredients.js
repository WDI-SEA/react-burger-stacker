import React from 'react'

const Ingredients = (props) => {
  return (
    <div>
      <ul>
        {props.ingredientsList.map(ingredient => (
          <li key={ingredient}>{ingredient.name} <button>></button></li>
        ))}
      </ul>
    </div>
  )
}

export default Ingredients;