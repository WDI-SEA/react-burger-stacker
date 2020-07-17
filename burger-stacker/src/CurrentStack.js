import React, { useState } from 'react';

function CurrentStack(props) {
    let currentList = props.ingredients.map((ingredient) => {
        let test = {
            background: ingredient
        }

        return (
            <div className = "addedIngredient" style = {test}>
                <h2>{ingredient}</h2>
            </div>
        );
    })

    return (
        <div>
            {currentList}
        </div>
    );
};

export default CurrentStack;