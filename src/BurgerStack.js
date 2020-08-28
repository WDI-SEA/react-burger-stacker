import React from 'react'

const BurgerStack = (props) => {
    return (
        <>
        <ul>
            {props.chosenIngredients.map((ingredients, i) => (
                <li key={i} style={{backgroundColor: `${ingredients.color}`}}>
                    {ingredients.name}</li>
            ))}
        </ul>
        </>
    )
}

export default BurgerStack