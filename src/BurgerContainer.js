import React, { Component } from "react";
import BurgerStack from "./BurgerStack";

class BurgerContainer extends Component {
    render() {
        return (
            <div className="w-32">
                <BurgerStack burgerArray={this.props.burgerArray} />
                <button onClick={this.props.handleBurgerClear}
                    className="px-2 py-1 bg-red-500 border rounded text-sm">
                    Clear
                </button>
            </div>
        );
    }
}

export default BurgerContainer;
