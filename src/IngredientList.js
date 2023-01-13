import React,{Component} from "react"
import Ingredient from "./Ingredient"
export default class IngredientList extends Component{

    render(){
        const ingredients = this.props.ingredients.map((ingredient,idx)=>{
            return(
                <Ingredient 
                    key={`ingredintList${idx}`} 
                    ingredient={ingredient}
                    handleClick={this.props.handleClick}
                />

                )
        })
        return(
            <>
            <ul>
                {ingredients}
            </ul>
            </>
        )
    }
}