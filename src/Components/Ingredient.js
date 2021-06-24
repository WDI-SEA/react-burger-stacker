import React from 'react'

export default function Ingredient(props) {

    
        return (
            <p style={{backgroundColor: props.ingredient.color}}>{props.ingredient.name}</p>
        )
    
}

