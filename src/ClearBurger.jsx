import React, { Component } from "react";

export default class ClearBurger extends Component{
    render(){
        return(
            <div>
                <button 
                onclick={this.props.handleBurgerClear}>
                Clear
                </button>
            </div>
        )
    }
}