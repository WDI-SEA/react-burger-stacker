import React from 'react';

const ClearBurger = (props) => {
    return (
        <button onClick={() => {props.clearBurger();}}>Clear Burger</button>
    )
}

export default ClearBurger;