import React from 'react'

const IngredientVisualizer = (props) => {

    return (
        <div className="ingredient" id={props.ingredient}>{props.ingredient}</div>
    )
}

export default IngredientVisualizer