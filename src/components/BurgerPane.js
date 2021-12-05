import React from 'react'
import Ingredient from './Ingredient'

const BurgerPane = props => {
    let burgerBits = props.ingredients.map(mapIngredient => (
        <Ingredient ingredient={mapIngredient} />
    ))
    return (
        <section className='pane'>
            <h3>The Burger</h3>
            { burgerBits }
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
}

export default BurgerPane