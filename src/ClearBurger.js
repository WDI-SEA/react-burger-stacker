import React from 'react';
function ClearBurger(props) {
    return (
        <div>
            <button onClick={props.resetBurger}><strong>Clear Burger</strong></button>
        </div>
    )
}

export default ClearBurger;