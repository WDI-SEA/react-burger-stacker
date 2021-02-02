import React, { Component } from 'react';
import Ingredient from './Ingredients';

class IngredientList extends Component{
    render(){
        return(
            <p>{this.props.ingredient.name}</p>
        )
    }
};

export default IngredientList;