import React, { Component } from "react";

export default class IngredientList extends Component {
    render(){
        const { ingredient } = this.props;
          return(
            <>
              <ul>
                <li 
                onClick={this.props.handleIngredientClick}
                style={{ backgroundColor: ingredient.color }}
                >{ingredient.name}</li>
              </ul>
              </>
          )
    }
}