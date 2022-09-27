import React, { Component } from "react"
import BurgerStack from "./BurgerStack"

class BurgerPane extends Component {
    render () {
        return (
            <div id="BurgerPane" style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: `${this.props.color}`,
              }}>
                
                <BurgerStack

                />
            </div>

        )
    }
}

export default BurgerPane