import React from 'react'

const Ingredient = (props) => {
        return (
            <p style={{backgroundColor: props.color}}>
                {props.ingredient}
            </p>
        )
}

export default Ingredient