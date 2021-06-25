import React from 'react'

const ClearBurger = (props) => {
        return (
            <div>
                <button onClick={(e) => props.clearBurger(e)}>
                    Clear Burger Stack
                </button>
            </div>
        )
}
export default ClearBurger
// clear burger needs to reset array to empty it