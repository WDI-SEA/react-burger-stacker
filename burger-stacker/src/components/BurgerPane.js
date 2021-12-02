import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    // loop over burger bits
    // display one Ingredient component for every bit of the burger
    render () {
        let burgerIngredients = this.props.ingredients.map(mapIngredient => (
            // we use a different function here assigned to clicky!! this is how we use the same component with different onClick functions
            <Ingredient ingredient={mapIngredient} clicky={this.props.remove}/>
        ))
        return (
            <section className='pane'>
                <h3>Burger Goes Here:</h3>
                { burgerIngredients }
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}