import { Component } from "react"
import PickedIngredients from "./PickedIngredients"

export default class BurgerStack extends Component {
    render() {
        const ingredientsPicked = this.props.ingredients.map((ingredient, idx ) => {
            return(
                <PickedIngredients 
                ingredient={ingredient}
                key={`$ingredientsPicked - ${idx}`}/>
            )
        })
     
        return (
            <div>
                {ingredientsPicked}
            </div>
        )
    }
}
