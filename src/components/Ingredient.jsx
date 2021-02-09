import React, { Component } from 'react';

function Ingredient (props) {
    // let content; 


  return (
  <span style={{backgroundColor: props.ingredient.color}} >  {props.ingredient.name}</span>
    
)
}


export default Ingredient; 

