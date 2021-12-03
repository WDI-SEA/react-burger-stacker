import Ingredient from './Ingredient'
import React from 'react'

// this is where the burger happens
// we'll want something that clears the burger 
const BurgerPane = props => {
    // we want to loop over the burgerbits that user has added
    // display one ingredient component for every bit of the burger
        let burgerBits = props.ingredients.map(mapIngredient => (
            <Ingredient ingredient={mapIngredient} clicky={props.removeIngr}/>
        ))
        return (
            <section className="pane">
                <h3>The Burger</h3>
                {burgerBits}
                <button onClick={props.clear}>Clear Burger</button>
            </section>
        )
    }

    export default BurgerPane