import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {
    render() {
        const ingredients = this.props.ingredientData.map(item => (
            <li onClick={(e) => this.props.addToBurger(e)}>
                <Ingredients ingredients={item.name} color={item.color} />
            </li>
        ))
            // return <IngredientList 
            // name={ingredient.name}
            // color={ingredient.color}
            // key={index}
            // />
            return (
                <ul>
                {ingredients}
                </ul>
            )
        }
}    
      
    // <form action="./IngredientList" method="post">
    // <label for="Ingredients">Ingredients</label>
    // <hidden input="ingredient_name" type="text" name="" value="">
    // <input type="submit" value="Add to Ingredients ">
    // </form>
        