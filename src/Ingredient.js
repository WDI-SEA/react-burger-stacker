import React, { Component } from "react";

class Ingredient extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color}} 
                onClick={this.props.handleIngredientClick}>
                {this.props.ingredient}
            </div>
        );
    }
}

export default Ingredient;
