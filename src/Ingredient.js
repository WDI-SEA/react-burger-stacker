import React from 'react';

function Ingredients(props) {
    console.log(props.ingredients)
    return(
        <div class="ingredients">
            <ul>
                {props.ingredients.map((newIngredients, i ) => (
                    <li key={i}>
                        {newIngredients.name}
                        <button onClick={(e) => {props.addIngredient(e, newIngredients);}}>+</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Ingredients;