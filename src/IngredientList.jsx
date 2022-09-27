import React, {Component} from 'react';
import Ingredients from './ingredients';
export default class IngredientList extends Component {
    
  render(){
    const ingredients = this.props.ingredientsArray.map((ingredient,i)=> {
        return(
            <Ingredients 
                ingredient={ingredient.name}
                color={ingredient.color}
                key={`ingredientId${i}`}
                addIngredient={this.props.addIngredient}/>
    )})
    // const addIngredient = this.props.addIngredient
    return(
        <div>
            <ul className="column1">
            Ingredient List
            {ingredients}
            {/* {addIngredient} */}
      </ul>
      </div>
    )
  }
}