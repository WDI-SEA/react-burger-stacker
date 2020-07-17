import React from 'react'

const ClearBurger = (props) => {
    return (
            <button onClick={() => props.clearIngredients()}>Clear Burger</button>
    )
}

export default ClearBurger