import React, { Component } from "react"
import BurgerStack from "./BurgerStack"
import ClearBurger from "./ClearBurger"

class BurgerPane extends Component {
    render () {
        return (
            <div id= "BurgerPane"
                style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    flex: "2"
                }}
            >
                <ClearBurger
                clearButton={this.props.clearButton}
                />
                <BurgerStack
                ingredients = {this.props.ingredients}
                allIngredients={this.props.allIngredients}
                />
            </div>
        )
    }
}


export default BurgerPane