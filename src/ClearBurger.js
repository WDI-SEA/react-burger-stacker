
import React from 'react'


export default function ClearBurger(props) {
    return (
        <button onClick={(e) => props.clearBurger(e)}>
            Clear Burger Stack
        </button>
    )
}