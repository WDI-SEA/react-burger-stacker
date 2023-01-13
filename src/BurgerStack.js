import React,{Component} from "react"
import Ingredient from "./Ingredient"
export default class BurgerStack extends Component{
    render(){
        let burgerIngredients = this.props.ingredients.map((ingredient,idx)=>{
            return(

                <Ingredient
                ingredient={ingredient}
                key={`ingredient${idx}`}
                />
                )
        })
        return(
            <>
                {burgerIngredients}
            </>
        )
    }
}