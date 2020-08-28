import React from 'react';

const ClearBurger = (props) => {
    return (
        <button
            onClick={() => {
                props.clearBurger()
            }}
        >
            Clear
        </button>
    );
};


export default ClearBurger