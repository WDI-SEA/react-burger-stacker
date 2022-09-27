import React, { Component } from "react";
import Ingredient from "./Ingredient";
export default class BurgerStack extends Component {
    render() {
        const onStack = this.props.ingredients.map((ingredient, i) => {
            return (
                <div key={`ingredientAdded${i}`}>
                        <Ingredient ingredient={ingredient}/>
                </div>
            )
        })
        return (
            <div>
                <button onClick={this.props.undo}>Undo</button>
                <div className="ingre-burger">
                {onStack}
                </div>
            </div>
        )
    }
}