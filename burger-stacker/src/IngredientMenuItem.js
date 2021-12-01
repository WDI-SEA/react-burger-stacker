import React, { Component } from 'react'

export default class IngredientMenuItem extends Component {
    render() {
        return (
            <>
                <li key={this.props.index}>{this.props.ingredient.name}</li>
                <form onSubmit={this.props.addIngredient}>
                    <input type="submit" value={this.props.ingredient.name} hidden/>
                    <input type="submit" value="Add Ingredient" />
                </form>
            </>
        )
    }
}
