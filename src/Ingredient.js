import React, { Component } from "react";

class Ingredient extends Component {
    render(){
        let color=this.props.color;
        let name=this.props.name;
        return(
            <div>
                <li style={{background:color}}>{name}</li>
            </div>
        )
    }
}

export default Ingredient;