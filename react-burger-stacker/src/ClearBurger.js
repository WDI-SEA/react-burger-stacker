import React from 'react'

export default function ClearBurger(props) {
    return (
        <div>
            <button onClick={(e) => props.action(e)}>
                🍔 CLEAR
            </button>
        </div>
    )
}