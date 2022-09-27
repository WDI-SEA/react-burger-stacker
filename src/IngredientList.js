import React, { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientList extends Component {
    render() {
        const ingredientList = this.props.ingredientArray.map((ingredient, index) => {
            return (
                <Ingredient 
                    ingredient={ingredient.name}
                    color={ingredient.color}
                    key={`ingredient-${index}`}
                    handleIngredientClick={this.props.handleIngredientClick}
                />
            );
        })
        return (
            <div>
                {ingredientList}
            </div>
        );
    }
}

export default IngredientList;
