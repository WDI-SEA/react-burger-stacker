// loop over ingredient list and display an ingredient component for each
import React, { Component } from "react"
import Ingredient from "./Ingredient"

export default class IngredientList extends Component {  
    render() {
        let allIngredients = this.props.ingredients.map(ingredient => (
            <li onClick={this.props.add}>
                <Ingredient ingredient={ingredient} onClick={this.props.clicky} />
            </li>
        ))
        //then in our return we'll render as necessary
        return (
            <section className="pane">
                <h3>Ingredient List</h3>
                <ul className="ingredient-list">
                    {allIngredients}
                </ul>
            </section>
        )
    }
}