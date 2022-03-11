import { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component {
    render() {
        const burgerStackIngredients = this.props.ingredients.map((ingredient,idx) => {
            return <Ingredient ingredient={ingredient} key={`ingredient-${idx}`} />
        })
        return (
            <div className='burger-stack'>
                {burgerStackIngredients}
            </div>
        )
    }
}