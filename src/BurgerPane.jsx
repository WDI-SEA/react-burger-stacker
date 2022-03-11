import React, { Component } from "react";
import Ingredient from "./Ingredient";

class BurgerPane extends Component {

    render() {

        const burger = this.props.burgerStack.map((item, idx) => {
            return (
                <Ingredient
                    key={idx}
                    ingredient={item}
                />
            )
        })

        return (
            <>
                <div>
                    <h1>Burjer Pane</h1>
                    {burger}

                    <button onClick={this.props.clearStack}>Clear Stack</button>
                </div>
            </>
        )
    }
}

export default BurgerPane