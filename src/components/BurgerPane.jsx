import React, { Component} from "react";
import BurgerStack from "./BurgerStack";

export default class BurgerPane extends Component {
    render() {
        return (
            <>
            <h2>Burger Pane</h2>
            <button
                onClick={this.props.handleClearStack}
            >
                Clear
            </button>
            <BurgerStack 
                stack={this.props.stack}
            />
            </>
        )
    }
}