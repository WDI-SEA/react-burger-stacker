import { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        // console.log(this.props.ingredients)
        const allIngredients = this.props.ingredients.map((ingredient,idx) => {
            return <Ingredient ingredient={ingredient} addIngredient={this.props.addIngredient} key={`ingredient-${idx}`} />
        })
        return (
            <div className='ingredient-list'>
                {/* <h2>IngredientList</h2> */}
                {allIngredients}
            </div>
        )
    }
}