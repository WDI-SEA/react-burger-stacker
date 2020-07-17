import React from 'react'

const ClearBurger = (props) => {
    return (
        <div>
            <button onClick={(e) => props.action(e)}>Eat Me!</button>

        </div>
        
    )
}
export default ClearBurger