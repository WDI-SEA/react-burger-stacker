import React from 'react'

const Ingredient = props => {
    return (
        // clicky means something different when it is rendered in the burger and when it is rendered on the ingredients menu
        // it is still the same element!!
        <p style={{backgroundColor: props.ingredient.color}} onClick={props.clicky}>
            { props.ingredient.name }
        </p>
    )
}

export default Ingredient