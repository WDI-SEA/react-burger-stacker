import React from 'react'
import IngredientItem from './IngredientItem'

export default function IngredientsList({ingredients}) {
  const allIngredients = ingredients.map(item => {
    return (
      <IngredientItem ingredient={item} key={Math.random()}/>
    )
  })

  return (
    <div>
      <h2>Here are some tasty ingredients</h2>
      <ul>
        {allIngredients}
      </ul>
    </div>
  )
}