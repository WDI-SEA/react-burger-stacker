import { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component {
    render() {
        let ingredients = this.props.ingredients.reverse().map(item => (
            <li>
                <Ingredient ingredient={item.name} color={item.color} />
            </li>
        ))

        return (
            <ul>
                {ingredients}
            </ul>
        )
    }
}