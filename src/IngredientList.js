import React, { Component } from "react";
import Ingredient from "./Ingredient";
export default class IngredientList extends Component {
    render() {
        const ingredients = this.props.ingredients.map((ingredient, i) => {
            return (
                <div key={`ingredient${i}`}>
                    <Ingredient ingredient={ingredient}/>
                    <button onClick={()=>this.props.add(i)}>Add</button>
                </div>
            )
        })
        return (
            <div>
            {ingredients}
            </div>
        )
    }
}