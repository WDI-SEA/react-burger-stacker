//this is where the burger happens
import React, { Component } from "react"
import Ingredient from "./Ingredient"

export default class BurgerPane extends Component {
    // we want to loop over the burger bits that use has added
    //display one ingredient component for every bit of the burger
    render() {
        let burgerBits = this.props.ingredients.map(ingredient => (
            <Ingredient ingredient={ingredient} clicky={this.props.remove}/>
        ))
        return (
            <section className="pane">
                <h3>The Burger</h3>
                {burgerBits}
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}