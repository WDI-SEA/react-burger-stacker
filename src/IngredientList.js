import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {

    render() {
        //we put this in the render because we want this logic to happen more than once 
        const ingredientComponents = this.props.ingredients.map((item, i) => {
            return (
                <Ingredients
                    //pass in the click event handler
                    ingredient={item}
                    handleIngredientClick={this.props.handleIngredientClick}
                    key={`ingredient-list-${i}`}
                />
            )
        })

        return (
            <div>
                {ingredientComponents}
            </div>
        )
    }

}