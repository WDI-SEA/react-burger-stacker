import React, { Component } from "react";

class Ingredient extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color}} 
                onClick={this.props.handleIngredientClick}
                className="mt-1 px-2 py-1 rounded text-center select-none hover:cursor-pointer">
                {this.props.ingredient}
            </div>
        );
    }
}

export default Ingredient;
