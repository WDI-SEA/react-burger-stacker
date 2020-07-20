import React from 'react'

function BurgerClear(props) {
    return (
        <div>
            <button onClick={(e) => props.action(e)}>
                Clear Burger
            </button>
        </div>
    )
}

export default BurgerClear