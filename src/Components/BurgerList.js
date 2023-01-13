import React, {Component} from "react";
import BurgerStack from "./BurgerStack";

export default class BurgerList extends Component {
    render() {
            const addedIngredient = this.props.addIngredients.map(ingredient => {
                return <BurgerStack ingredient={ingredient} />
            })
        return (
            <>
               {addedIngredient}
                <button className="btn" onClick={this.props.clearBurger}>Make New Burger</button>
            </>
        )
    }
}