import React, { Component } from "react";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";

class IngredientContainer extends Component {
    render() {
        return (
            <div className="flex flex-col items-center">
                <IngredientList 
                    ingredientArray={this.props.ingredientArray}
                    handleIngredientClick={this.props.handleIngredientClick}
                />
                <IngredientForm handleAddIngredient={this.props.handleAddIngredient} />
            </div>
        );
    }
}

export default IngredientContainer;
