import React, { Component } from 'react'

export default class IngredientList extends Component {
    render() {
        const allIngredients = this.props.ingredients.map((item, i) => {
            return <li key={i}>{item.name}</li>
        })
        return (
            <div>
                <h3>Ingredients:</h3>
                <ul>{allIngredients}</ul>
            </div>
        )
    }
}