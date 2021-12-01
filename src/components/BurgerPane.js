// where the burger happens
import React, { Component } from 'react' 
import Ingredient from './Ingredient'
// also need something that clears the burger

export default class BurgerPane extends Component {
    // loop over the burger bits that user has added
    // display one ingredient component for every bit of the burger
    render() {
        let burgerBits = this.props.ingredients.map(mapIng => (
            <Ingredient ingredient={mapIng} />
        ))
        return (
            <section className='pane'>
                <h3>The Burger</h3>
                { burgerBits }
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}