import { Component } from "react"
import BurgerStack from "./BurgerStack"
import ClearBurger from "./ClearBurger"

export default class BurgerPane extends Component {
    render () {
        return (
            <div
                style={{
                    display: "flex",
                    flex: "2",
                    flexDirection: "column-reverse",
                   
                }}>
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


