import React, { Component } from "react"



class BurgerStack extends Component {
    render () {
        return (
            <div id="BurgerStack" 
                >
                {console.log(this.props.color)}
                <li style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    flex: "2",
            }}>
                    {this.props.ingredientsPicked}
                </li>
            </div>

        )
    }
}

export default BurgerStack