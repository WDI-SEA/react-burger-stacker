import React, { useEffect } from 'react';

const Ingredient = (props) => {
    return (
        <div className="ingredient">
            {props.name}
            <button onClick={() => props.pileHigh(props.name)}>Add Me!</button>
        </div>
    )
}

export default Ingredient;