import React, { Component } from 'react'

export default class IngredientList extends Component {
    render() {
        const allIngredients = this.props.ingredients.map((item, i) => {
            return (
                <div>
                    <li key={i}>{item.name} <button>+</button></li>
                </div>
            )
        })
        return (
            <div>
                <h3>Ingredients:</h3>
                <ul>{allIngredients}</ul>
            </div>
        )
    }
}