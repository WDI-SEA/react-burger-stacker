import React from 'react';

const Ingredient = (props) => {

    const IngredientStyle = {backgroundColor: props.ingredient.color, color: props.ingredient.text}

    return (
        <div>
            <button key={props.index} value={ props.index } style={IngredientStyle} onClick={(e) => {props.addIngredient(e)}}>
                {props.ingredient.name}
            </button>
        </div>
    )
}

export default Ingredient;