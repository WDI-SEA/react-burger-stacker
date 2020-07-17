import React, { useState } from 'react'
import './App.css';
import Ingredient from './ingredient'

const IngredientsList = (props) => {

  //set ingredient state
 

  const [addedIngredients, setAddedIngredients] = useState([])

  let handleClick = (i) => {
    setAddedIngredients([i.name, ...addedIngredients])
    console.log(addedIngredients)
   }

  return (
    <div className='ingredients-list'>
      <Ingredient />
      <div>
       {addedIngredients}
      </div>
   </div>
  )
}

export default IngredientsList