import React from 'react'

const Ingredient = props => {

    return (
    <>
    <div style={{backgroundColor: props.ing.color } } id={props.index}>
            <h1>{props.ing.name}</h1>
        </div>
    </>
    )
}

export default Ingredient