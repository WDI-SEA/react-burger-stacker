import React, { Component } from 'react';
import Ingredient from './Ingredients';

class IngredientList extends Component{
    render(){
        return(
            <div>  
            <Ingredient ingredients={this.props.ingredient.name}/><button>+</button><button>-</button>
            </div>
        )
    }
};

export default IngredientList;