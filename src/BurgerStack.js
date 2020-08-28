import React from 'react';

const BurgerStack = (props) => {
    return (
        <div>
            <ul>
                {props.chosenIngredients.map((ingredient, i) => {
                return    <li key={i} style={{backgroundColor: `${ingredient.color}`}}>{ingredient.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default BurgerStack;