import React, { Component } from "react";
import BurgerIngredient from "./BurgerIngredient";

class BurgerStack extends Component {
    render() {
        const burger = this.props.burgerArray.map((ingredient, index) => {
            return (
                <BurgerIngredient 
                    ingredient={ingredient}
                    key={`ingredient-${index}`}
                />
            );
        })
        return (
            <div>
                {burger}
            </div>
        );
    }
}

export default BurgerStack;
