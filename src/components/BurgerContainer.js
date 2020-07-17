import React from 'react';
import BurgerLayer from './BurgerLayer';

const BurgerContainer = (props) => {
    return (
        <div className="burger-container">
        {props.stackOrder.map(layer => (
            <BurgerLayer color={layer.color} />
        ))}
            <button onClick={() => props.clearStack()}>Clear</button>
        </div>
    );
}

export default BurgerContainer;