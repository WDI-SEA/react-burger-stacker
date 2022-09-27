import React, { Component } from "react";
import Ingredient from './Ingredient'

export default class IngredientList extends Component{
    render(){
        const ingredientComponents = this.props.ingredients.map((Item, idx) => {
            return(
                < Ingredient
                //pass in the click event handler
                Ingredient={Item}
                handleIngredientClick={this.props.handleIngredientClick}
                key={`ingredient-list-${idx}`}
                />
            )
        })
        return(
            <div>
                {ingredientComponents}
            </div>
        )
    }
}