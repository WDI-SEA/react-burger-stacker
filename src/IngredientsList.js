import React, { Component } from "react";
import Ingredient from './Ingredient'

export default class IngredientsList extends Component {
    render() {
        const ingredientsMap = this.props.ingredients.map((ingredient, i) => {
            return (
                <div>
                    <Ingredient 
                        key={`${this.props.ingredients[i].name}-${i}`}
                        ingredient={this.props.ingredients[i]}
                        stack={this.props.stack}
                        handleIngredientClick={this.props.handleIngredientClick}
                    />
                </div>
            )
        })
        return (
            <div>{ingredientsMap}</div>
        )
    }
}