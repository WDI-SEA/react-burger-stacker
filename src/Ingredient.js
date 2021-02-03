import React, { Component } from "react";

class Ingredient extends Component {
    render(){
        let color=this.props.color;
        let name=this.props.name;
        return(
           
                <li style={{background:color}}>{name}</li>
            
        )
    }
}

export default Ingredient;