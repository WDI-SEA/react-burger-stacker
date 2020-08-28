import React from 'react';

function Ingredients(props) {

    return(
        <div class="ingredients">
            <ul>
                {props.ingredients.map((newIngredient, i) => (
                <li key={i}>
                        {newIngredient.name}
                        <button onClick={(e) => {props.addIngredient(e, newIngredient)}}>+</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Ingredients