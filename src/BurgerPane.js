import React, { Component } from "react";
import BurgerStack from "./BurgerStack";

export default class BurgerPane extends Component {
    render() {
        return (
            <div>
                <BurgerStack ingredients={this.props.ingredients} undo={this.props.undo}/>
                <button onClick={this.props.clear}>Clear</button>
            </div>
            

        )
    }
}