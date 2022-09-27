import React, { Component } from "react";

class BurgerIngredient extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.ingredient.color}}
                className="mt-1 px-2 py-1 rounded text-center select-none">
                {this.props.ingredient.name}
            </div>
        );
    }
}

export default BurgerIngredient;
