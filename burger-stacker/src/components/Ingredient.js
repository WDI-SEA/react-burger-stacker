import React from 'react'

export default function Ingredient(props) {
   
        return (
            <p style={{backgroundColor: props.ingredient.color}} 
            onClick={props.clicky}>
            {props.ingredient.name}
            </p>
        )
    }