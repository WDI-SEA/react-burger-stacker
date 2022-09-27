import { Component } from "react"
import Ingredients from "./Ingredients"


export default class BurgerStack extends Component {
    render() {
        const ingredientComponents = this.props.clickedIngredients.map((item, i) =>{
            return(
                <Ingredients 
                    ingredient = {item}
                    key={`burgerlist-ingredient${i}`}
                />
            )
        })
        return(
            <div>
                {ingredientComponents}

            </div>
        )
    }
}


// ternary statement = if/else

// condition "?"" what to return if true ":" what to return if false

// aka if (conditon) { 
    // what to return if true
// }else {
    // what to return if flase
//}