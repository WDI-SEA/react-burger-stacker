import React, { useState } from 'react';

export default function Ingredient(props){
  const style = {
    backgroundColor: props.ingredient.color,
    color: `antiquewhite`
  }

  const styleOnion = {
    backgroundColor: props.ingredient.color,
    color: `black`
  }

  return (
    <div>
      <button key={ props.index } 
          style={ (props.ingredient.name === 'Onion' || props.ingredient.name === 'Lettuce') ? styleOnion : style } 
          onClick={ (e) => { props.addIngredient(e) } }
          value={ props.index }
      >
        { props.ingredient.name }
      </button>
    </div>
  )
}