import React, { useState } from 'react'

function Ingredients(props) {
    
    if (props.ingredient) {
        return <p style={{backgroundColor: props.ingredient.color, margin: 0}}>{props.ingredient.name}</p>
    }
    else {
        return <p>Error</p>
    }
}

export default Ingredients