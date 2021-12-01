import React, { Component } from 'react'
import IngredientMenuItem from './IngredientMenuItem'

export default class IngredientMenu extends Component {
    render() {
        const allMenuItems = this.props.ingredients.map((ingredient, index) => {
            return <IngredientMenuItem ingredient={ingredient} key={index} addIngredient={this.props.addIngredient} />
        })
        return (
            <div className="IngredientMenu">
                <ul>
                    {allMenuItems}
                </ul>
            </div>
        )
    }
}