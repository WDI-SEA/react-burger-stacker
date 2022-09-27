import { Component } from "react"
import Ingredients from "./Ingredients"


export default class IngredientList extends Component {
    render() {
        const allIngredients = this.props.ingredients.map((ingredient, idx) => {
            return (
            
                <Ingredients
                key={`ingredient - ${idx}`}
                ingredient={ingredient.name}
                color={ingredient.color}
                ingredientButton = { () => this.props.ingredientButton(`${ingredient.name}`)}
                />
                
            )
        })


        return (
            <div>
                <ul style={{
                        display: "flex",
                        flex: "1",
                        flexDirection: "column",

                }}>{allIngredients}</ul>
      
            </div>
            
        )
    }
}

