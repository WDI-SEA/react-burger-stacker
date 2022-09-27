import React, { Component } from "react";

class BurgerContainer extends Component {
    render() {
        const burger = this.props.burgerArray.map((ingredient, index) => {
            return (
                <div key={`ingredient-${index}`}>
                    {ingredient}
                </div> 
            );
        })
        return (
            <div>
                {burger}
                <button onClick={this.props.handleBurgerClear}
                    className="px-2 py-1 bg-red-500 border rounded text-sm">
                    Clear
                </button>
            </div>
        );
    }
}

export default BurgerContainer;
