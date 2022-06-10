import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {

        

        const ingredients = this.props.list.map((item, index) => {
            return (
            <Ingredient key={index} name={item.name} onClick={this.props.onClick}
            />
            )
        })

    return (
        <div>

            {ingredients}
            </div>
    )
}
}
