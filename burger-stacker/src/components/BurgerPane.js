import React from 'react'
import Ingredient from './Ingredient'

const BurgerPane = props => {
    // loop over burger bits
    // display one Ingredient component for every bit of the burger
    let burgerIngredients = props.ingredients.map(mapIngredient => (
        // we use a different function here assigned to clicky!! this is how we use the same component with different onClick functions
        <Ingredient ingredient={mapIngredient} clicky={props.remove}/>
    ))
    return (
        <section className='pane'>
            <h3>Burger Goes Here:</h3>
            { burgerIngredients }
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
}

export default BurgerPane