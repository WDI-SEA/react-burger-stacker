import React from 'react';
import Ingredient from './Ingredient'

export default function IngredientList(props){
  const renderedIngredients = props.ingredientData.map((ingredient, index) => { 
    return <Ingredient ingredient= { ingredient } index= { index } addIngredient= { props.addIngredient }/>
  })
  return (
    <div>
      <h1>Ingredient List</h1>
      { renderedIngredients }
    </div>
  )
}