import React, {Component} from "react";

export default class Ingredient extends Component {
    render() {

        return (
            <>
                <div 
                className="burgerDiv" 
                onClick={()=>{this.props.handleAddIngredient(this.props.ingredient)}} 
                style={{
                    backgroundColor: this.props.ingredient.color
                }}
                >
                    {this.props.ingredient.name}
                
                </div>
                {/* style={`background-color: ${this.props.ingredient.color}`} */}
            </>
        )
    }
}