import React from 'react';

const BurgerContainer = (props) => {
    return (
        <div className="burger-container">
            <h1>{props.stackOrder}</h1>
            <button onClick={() => props.clearStack()}>Clear</button>
        </div>
    );
}

export default BurgerContainer;