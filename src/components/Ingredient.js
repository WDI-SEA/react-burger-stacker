import React from 'react'

const Ingredient = (props) => {
    return(
    <li><button onClick={props.handleClick}>{props.oneIngredient.name}</button></li>
    )
}



export default Ingredient