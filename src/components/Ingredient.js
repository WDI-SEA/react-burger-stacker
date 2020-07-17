import React, { useEffect } from 'react';

const Ingredient = (props) => {
    return (
        <div className="ingredient">
            {props.ingredient.name}
            <button onClick={() => props.pileHigh(props.ingredient)}>Add Me!</button>
        </div>
    )
}

export default Ingredient;