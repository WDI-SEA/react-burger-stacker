import React, { useState } from 'react';

export default function Ingredient(props){
  const style = {
    backgroundColor: props.ingredient.color,
    color: `antiquewhite`
  }

  return (
    <div>
      <div key={ props.index } 
          style={ style } 
      >
        { props.ingredient.name }
      </div>
    </div>
  )
}