
import React from 'react'

const ClearBurger = (props) => {
        return (
            <button onClick={(e) => props.clearBurger(e)}>Clear Burger Stack</button>
        )
}

export default ClearBurger