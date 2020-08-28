import React from 'react';

function Ingredients(props) {

    return(
        <div class="ingredients">
            <ul>
                {props.ingredients.map((newIngredient, i) => (
                <li key={i}>
                        <button onClick={(e) => {props.addIngredient(e, newIngredient)}}> {newIngredient.name}</button>
                        <button onClick={(e) => {props.undoList(e, i)}}>Undo</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Ingredients