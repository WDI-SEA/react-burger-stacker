import React from "react";

export default function BurgerIngredients(props) {
  console.log(`this is from burgeringredients ${props.ingredient}`)
  return (
    <div className='burgerIngredients'>
    <h5>{props.ingredient}</h5>
      </div>
  )
}