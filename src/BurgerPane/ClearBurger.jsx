import React from 'react';

const ClearBurger = (props) => {
    return (
        <div>
            <button onClick={() => {props.clearBurger()}}>Start a new burger</button>
        </div>
    )
}

export default ClearBurger;