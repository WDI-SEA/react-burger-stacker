import React, { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientList extends Component {
    render() {
        const ingredientComponents = this.props.ingredientArray.map((ingredient, index) => {
            return (
                <Ingredient 
                    ingredient={ingredient}
                    key={`ingredient-${index}`}
                    handleIngredientClick={this.props.handleIngredientClick}
                />
            );
        })
        return (
            <div>
                {ingredientComponents}
            </div>
        );
    }
}

export default IngredientList;
