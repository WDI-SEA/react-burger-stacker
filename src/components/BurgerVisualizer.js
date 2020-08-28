import React from 'react'
import IngredientVisualizer from "./IngredientVisualizer";

const BurgerVisualizer = (props) => {
    return (
        <div className="burgerVisualizer">
            <h1>Burger Visualizer</h1>
            {props.ingredients.map((ingredient, key) => {
                return(
                    <IngredientVisualizer key={key} ingredient={ingredient} />
                )
            })}
            <button onClick={props.clearIngredients}>Clear Ingredients</button>
        </div>
    )
}

export default BurgerVisualizer