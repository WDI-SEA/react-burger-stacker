import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render() {
        let list = this.props.ingredients.map(ingredient => (
            <li onClick={this.props.add}>
                <Ingredient ingredient={ingredient} />
            </li>
        ))
        return (
            <section className='pane'>
                <h1>INGREDIENT LIST</h1>
                <ul className="ingredient-list">
                    {list}
                </ul>
            </section>
        )
    }
}

export default IngredientList