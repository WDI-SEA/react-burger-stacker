import React, { useEffect } from 'react';

const Ingredient = (props) => {
    return (
        <li className="ingredient">
            <button onClick={() => props.pileHigh(props.ingredient)}>Add Me!</button>
            {props.ingredient.name}
        </li>
    )
}

export default Ingredient;