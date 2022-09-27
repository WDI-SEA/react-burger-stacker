import React, { Component } from "react";
import BurgerStack from "./BurgerStack";
import BurgerClear from "./BurgerClear";

class BurgerContainer extends Component {
    render() {
        return (
            <div className="flex flex-col items-center">
                <BurgerStack burgerArray={this.props.burgerArray} />
                <BurgerClear handleBurgerClear={this.props.handleBurgerClear} />
            </div>
        );
    }
}

export default BurgerContainer;
