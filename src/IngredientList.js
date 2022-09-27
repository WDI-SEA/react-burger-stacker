import React, { Component } from "react"
import Ingredients from "./Ingredients"


class IngredientList extends Component {
    render() {
        const allIngredients = this.props.ingredients.map((ingredient, i) => {
            return (
            
                <Ingredients
                key={`ingredient${i}`}
                ingredient={ingredient.name}
                color={ingredient.color}
                ingredientButton = { () => this.props.ingredientButton(`${ingredient.name}`)}
                />
                
            )
        })


        return (
            <div id="IngredientList">
                <ul style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "1",
                }}>{allIngredients}</ul>
      
            </div>
            
        )
    }
}

export default IngredientList