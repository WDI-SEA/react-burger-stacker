import React, {Component} from "react";

export default class BurgerStack extends Component{
    render(){
        const name = this.props.stack.name
        const color = {
            backgroundColor:   this.props.stack.color
        }
        return(
            <div style={color}>
                <p>{name}</p>
            </div>
        )
    }
}