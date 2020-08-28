import React from 'react'
import Ingredient from './Ingredient'


const IngredientList = (props) => {
    let ingred = props.ingredients.map((ingredient, index) => {
        return <Ingredient oneIngredient={ingredient}
        handleClick={() => props.ingredientsClick(index)}/>
    })
    return(
    <ul>{ingred}</ul>
    )
}


export default IngredientList