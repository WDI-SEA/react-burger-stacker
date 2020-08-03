import React from 'react';

function ClearBurger(props) {
    return (
        <div>
            <button onClick={props.action}>🍔 Eat ME</button>
        </div>
    );
};

export default ClearBurger;