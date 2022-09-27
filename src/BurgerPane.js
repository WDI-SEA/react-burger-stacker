import React, { Component } from 'react'
import Ingredient from './Ingredient'
import ClearBurger from './ClearBurger'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render() {
        let burgerItems = this.props.ingredients.map(ingredient => (
            <Ingredient ingredient={ingredient} />
        ))
        return (
            <section className='pane'>
                <h1>BURGER PANE</h1>
                <ClearBurger clear={this.props.clear} />
                {burgerItems}
            </section>
        )
    }
}
