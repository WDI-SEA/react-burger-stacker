import React, { Component } from "react"
import PickedIngredients from "./PickedIngredients"

class BurgerStack extends Component {
    render() {
        const ingredientsPicked = this.props.ingredients.map((ingredient, i ) => {
            return(
                <PickedIngredients 
                ingredient={ingredient}
                key={`$ingredientsPicked${i}`}
                />
            )
        })
     
        return (
            <div id="BurgerStack">
       
                {console.log("picked", ingredientsPicked)}
                {ingredientsPicked}
                
            </div>
        )
    }
}

export default BurgerStack