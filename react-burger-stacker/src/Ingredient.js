import React from 'react'

function Ingredient(props) {
    return (
        <div className="ingredient">
            <h3>{props.ingredient}</h3>
        </div>

    )
}

export default Ingredient