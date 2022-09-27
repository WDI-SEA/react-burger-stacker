import React, { Component } from 'react'
import IngredientList from './IngredientList'

export default class BurgerStack extends Component {
    render() {
        let burgerItems = this.props.ingredients.map(ingredient => <li><IngredientList ingredient={ingredient} /></li>)

        return (
            <div>
                <h2>BURGER STACK</h2>
                <ul className='burger'>
                    {burgerItems}
                </ul>
            </div>
        )
    }
}
