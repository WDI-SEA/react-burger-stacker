import React, { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientList extends Component {

    render() {
        const availableItems = this.props.ingredients.map((item, idx) => {
            return (
                <Ingredient
                    handleClicker={this.props.handleClicker}
                    burgerStack={this.props.burgerStack}
                    key={idx}
                    ingredient={item}
                />
            )
        })
        return (
            <>
                <div>
                    <h1>Ingredients List</h1>
                    <ul>
                        {availableItems}

                    </ul>

                </div>

            </>
        )
    }
}

export default IngredientList