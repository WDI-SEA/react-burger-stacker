import React, { Component } from 'react'
import Ingredients from './ingredients'

export default class IngredientList extends Component {

    render() {
        return (
            <div>
                {Ingredients.map((ingredient, index) => {
                    return ( 
                        <button className="ingredient-box" 
                            style={{
                                backgroundColor: ingredient.color
                            }}
                            key={index}
                            name={ingredient.name}
                            value={ingredient.color}
                            onClick={this.props.addToStack}
                        >{ingredient.name}</button>)
                })}
            </div>
        )
    }
}