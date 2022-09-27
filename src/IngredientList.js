import React, { Component } from 'react'
import Ingredients from './Ingredients'


export default class IngredientList extends Component {
    render() {
        const ingredientComponents = this.props.ingredients.map((item, i) => {
            return (
                <Ingredients 
                    // pass in the click event handler
                    ingredient={item}
                    handleIngredientClick={this.props.handleIngredientClick}
                    key={`ingredient-list-${i}`}
                />
            )
        })

        // ingredientComponents.push(<Ingredient ingredient={{ name: 'American Cheese', color: 'yellow' }} key={`ingrediant-list${ingredientComponents.length}`}  />)

        return (
            <div>
                {ingredientComponents}
            </div>
        )
    }
}