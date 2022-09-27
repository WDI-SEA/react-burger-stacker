import React, { Component } from "react";

class Ingredient extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.ingredient.color, color: this.props.ingredient.color === "#3F250B" ? "white" : "black"}} 
                onClick={() => this.props.handleIngredientClick(this.props.ingredient)}
                className="mt-1 px-2 py-1 rounded text-center select-none hover:cursor-pointer">
                {this.props.ingredient.name}
            </div>
        );
    }
}

export default Ingredient;
