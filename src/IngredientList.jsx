import React, { Component } from 'react';
import Ingredients from './Ingredients';

class IngredientList extends Component {
    render() { 
        
        const ingredients = this.props.ingredients.map((ingredient, idx) =>{
                return <Ingredients 
                key={`ing-${idx}`} 
                ingredient={ingredient} 
                addToBurger={this.props.addToBurger}/>
        })  

        return (

            <section className='ingredient-list'>
                <h1>Ingredient List: </h1>
                {ingredients}
            </section>
           
        
        );
    }
}
 
export default IngredientList   