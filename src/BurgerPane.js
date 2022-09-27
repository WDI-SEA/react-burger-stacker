import React, { Component } from 'react'
import Ingredient from './Ingredient'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render() {
        let burgerbits = this.props.ingredients.map(ingredient => (
            <Ingredient ingredient={ingredient} />
        ))
        return (
            <section className='pane'>
                <h1>BURGER PANE</h1>
                <ClearBurger clear={this.props.clear} />
                {burgerbits}
            </section>
        )
    }
}

export default BurgerPane