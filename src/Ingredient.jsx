import React, { useState } from 'react';

export default function Ingredient(props){
  const style = {
    backgroundColor: props.ingredient.color,
    color: `antiquewhite`
  }

  //console.log(props)
  return (
    <div>
      <button key={ props.index } 
          style={ style } 
          onClick={ (e) => { props.addIngredient(e) } }
          value={ props.index }
      >
        { props.ingredient.name }
      </button>
    </div>
  )
}