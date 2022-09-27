import React, { Component } from 'react'


export default class IngredientList extends Component{



    handleClick = (name, color) => {
        this.setState({
            stack: this.props.stack.push({
                name: name, 
                color: color})
        })
        console.log(this.props.stack)
    }

    render(){
        const ingredients = this.props.ingredients.map((ingredient, i) => {
            return (
                <li
                    style={{ backgroundColor: ingredient.color}}
                    onClick= {() => {this.handleClick(`${ingredient.name}`, `${ingredient.color}`)}}
                    key={`ingredient${i}`}
                >
                    {ingredient.name}
                </li>
            )
        })
    return(
      <ul>
        {ingredients}
      </ul>
    )
  }
}