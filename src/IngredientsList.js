import React from 'react'
import IngredientItem from './IngredientItem'

export default function IngredientsList({ingredients}) {
    

  const allIngredients = ingredients.map(item => {

  let addIng = (e) => {
    let newBurger = []
    ingredients.unshift(e.target.value)
    .then(response => {
      newBurger.push(e.target.value)
    })
  }
  
    return (
      <IngredientItem ingredient={item} key={Math.random()}
        handleClick={addIng}/>
    )
  })

  return (
    <div className="container">
      <h2>Here are some tasty ingredients</h2>
      <ul>
        {allIngredients}
      </ul>
    </div>
  )
}