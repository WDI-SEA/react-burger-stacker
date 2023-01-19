import React, { Component } from 'react'
import Ingredients from './Ingredients'
import BurgerPane from './BurgerPane'

export default class IngredientList extends Component {
    render () {
        // console.log(this.props.ingredients)
        const listToRender = this.props.ingredients.map((item, i) => {
            return (
                <Ingredients
                    key={`ingredient-${i}`}
                    item={item}
                    handleAddToStack={this.props.handleAddToStack}
                />
            )
        })

        return (
            <div>
                <h1 >Ingredients</h1>
                <div>
                    {listToRender}
                </div>
            </div>
        )
    }
}