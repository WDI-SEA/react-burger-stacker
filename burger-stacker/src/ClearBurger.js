import React, {useState} from 'react';

const ClearBurger = (props) => {
    return (
        <div>
            <button onClick={(e) => props.action(e)}>Clear Burger</button>
        </div>
    )
}

export default ClearBurger