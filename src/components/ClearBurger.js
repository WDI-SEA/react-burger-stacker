import React, { Component } from "react";

class ClearBurger extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="ClearBurger">
                <p>--ClearBurger here</p>
                <button onClick={(e) => this.props.clearIngredients(e)}>Clear Burger</button>
            </div>
        )
    }
}

export default ClearBurger;