import React, { Component } from "react"
import BurgerStack from "./BurgerStack"

class Ingredients extends Component {
    render() {
        return (
            <div id="Ingredients">
                <li style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                    color: "white",
                    width: "20vw",
                    backgroundColor: `${this.props.ingredients.color}`
                    }}
                    onClick = {this.props.onClick}
                >{this.props.ingredients.name}</li>
                <BurgerStack
                name= {this.props.ingredients.name}
                color={this.props.ingredients.color}
                />
            </div>
        )
    }
}

export default Ingredients