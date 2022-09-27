import { Component } from "react"
import BurgerStack from "./BurgerStack"
import ClearBurger from "./ClearBurger"

export default class BurgerPane extends Component{
    render(){
        return(
            <div>
                <BurgerStack 
                    clickedIngredients = {this.props.clickedIngredients}
                    handleIngredientClick ={() => {}}
                />

                <ClearBurger 
                    handleBurgerClear = {this.props.handleBurgerClear}
                />

            </div>
        )
    }
}

