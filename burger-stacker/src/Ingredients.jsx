import React from 'react'

const Ingredients = (props) => {
        return (
                <h4 style={{backgroundColor: props.color}}>
                    {props.ingredients}</h4>
        )
}

export default Ingredients;