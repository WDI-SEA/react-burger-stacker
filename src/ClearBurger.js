import React from 'react'

function ClearBurger(props) {
    return(
        <div>
            <button onClick={(e) => props.action(e)}>
            🍔 Get Rid of this Burger 🍔
            </button>
        </div>
    )
}

export default ClearBurger;