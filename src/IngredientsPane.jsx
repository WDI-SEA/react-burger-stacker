import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientsPane extends Component {
    state={

    }
    render() { 
        const ingredientsList = this.props.ingredients.map((elem, idx)=>{
            return <Ingredient handleClick={()=>{this.props.handleClick(elem)}} key={`ingredient-${idx}`} ingredientName={elem.name} ingredientColor={elem.color} />
        })
        return (
        <div className='panes'>
            <h1>Ingredients:</h1>
            {ingredientsList}
        </div>
        );
    }
}
 
export default IngredientsPane;