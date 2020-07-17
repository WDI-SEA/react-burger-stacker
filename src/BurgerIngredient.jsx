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
      <div  key={ props.index } 
            style={ (props.ingredient.name === 'Onion' || props.ingredient.name === 'Lettuce') ? styleOnion : style } 
      >
      { props.ingredient.name }
      </div>
    </div>
  )
}