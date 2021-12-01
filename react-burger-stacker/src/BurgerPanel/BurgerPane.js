// this guy is where the burger happens
import React, { Component } from 'react'
import Ingredient from '../IngredientList/Ingredient'
//we'll also want something that clears the burger

class BurgerPane extends Component {
    // we want to loop over the burgerbits that the user has added
    //display one Ingredient componenet for every bit of the burger
    render () {
        let burgerBits = this.props.ingredients.map(mapIngredient => (
            <Ingredient ingredient={mapIngredient} clicky={this.props.remove}/>
        ))
        return (
            <section className="pane">
                <h3>The Burger</h3>
                { burgerBits }
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}

export default BurgerPane