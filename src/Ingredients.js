import React from 'react';

function Ingredients(props) {

    return(
        <div class="ingredients">
            <ul>
                {props.ingredients.map((newIngredient, i) => (
                <li key={i}>
                        <button onClick={(e) => {props.addIngredient(e, newIngredient)}}> {newIngredient.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Ingredients