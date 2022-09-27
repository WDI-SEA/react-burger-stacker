import React, { Component } from "react";

class BurgerIngredient extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.ingredient.color}}>
                {this.props.ingredient.name}
            </div>
        );
    }
}

export default BurgerIngredient;
