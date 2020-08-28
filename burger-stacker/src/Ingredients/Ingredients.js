import React from 'react';

const Ingredients = (props) => {

    const ingredients = props.ingredients.map((ingredient, i) => {
        return <li key={i} style={{color:ingredient.color}}>
            {ingredient.name}
            <button onClick={(e) => props.addIngredients(ingredient.name)}> + </button>
        </li>
    })
    return (
            <div>
            <li>{ingredients}</li>
            </div>
    )
}

export default Ingredients