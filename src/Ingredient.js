import React, {Component} from "react"; 

export default class Ingredient extends Component{
 
    render() {
        const name = this.props.ingredient.name
        const color = {
            backgroundColor:   this.props.ingredient.color
        }
        return(
            <div style={color} onClick={()=>this.props.handleIngredientClick(this.props.ingredient)}>
                <p>{name}</p>
            </div>
        )
    }
}