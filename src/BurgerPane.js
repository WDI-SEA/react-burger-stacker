// this guy is where the burger happens
import React, { Component } from 'react'
import Ingredient from './Ingredient'
// we'll also want something that clears the burger

export default class BurgerPane extends Component {
    // we want to loop over the burgerbits that user has added
    // display one Ingredient component for every bit of the burger
    render () {
        let burgerBits = this.props.ingredients.map(mapIngredient => (
            <Ingredient ingredient={mapIngredient} />
        ))
        return (
            <section className='pane'>
                <h3>The Burger</h3>
                { burgerBits }
            </section>
        )
    }
}