import React, { Component } from "react";

class BurgerClear extends Component {
    render() {
        return (
            <button onClick={this.props.handleBurgerClear}
                className="px-2 py-1 bg-red-500 border rounded text-sm">
                Clear
            </button>
        );
    }
}

export default BurgerClear;
