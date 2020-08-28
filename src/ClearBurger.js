import React from 'react'

export default function ClearBurger (props) {

    
        return (
            <div>
                <button onClick={()=> {props.clearBurger()}}>Clear Burger</button>
            </div>
        )
}


