import React, { Component } from "react";

export default class ClearBurger extends Component{
    render(){
        return(
            <div onClick={this.props.handleBurgerClear}>
                <button> clear burger</button>
            </div>
        )
    }
}