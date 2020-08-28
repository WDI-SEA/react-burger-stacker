import React from 'react'
import IngredientBuildBtn from "./IngredientBuildBtn";
import '../index.css'

const BurgerBuilder = (props) => {

    let ingredientsButtons = props.ingredients.map((ingredient, key) => { return <IngredientBuildBtn name={ingredient.name} key={key} color={ingredient.color} onClick={props.addIngredient} />})

    return (
        <div className="burgerBuilder">
            <h1>Burger Builder</h1>
            {ingredientsButtons}
        </div>
    )
}

export default BurgerBuilder