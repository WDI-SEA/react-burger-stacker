import React, { Component } from 'react'


export default class IngredientList extends Component{



    handleClick = (filter) => {
        this.setState({
            stack: this.props.stack.push(filter)
        })
        console.log(this.props.stack)
    }

    render(){
        const ingredients = this.props.ingredients.map((ingredient, i) => {
            return (
                <li
                    onClick= {() => {this.handleClick(`${ingredient.name}`)}}
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