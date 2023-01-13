import React, {Component} from "react";

export default class BurgerList extends Component {
    render() {
        return (
            <>
                <div className="burgerDiv">{this.props.addIngredients}</div>
                <button className="btn" onClick={this.props.clearBurger}>Make New Burger</button>
            </>
        )
    }
}