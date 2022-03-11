import './App.css'
import {Component} from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render() {
        const ingredients = this.props.ingredients.map((ingredient,idx) => {
            return <Ingredient ingredient={ingredient} addToBurger= {this.props.addToBurger} key={`ingredient-${idx}`} />
        })
        return (
            <section className='ingredient-list'>
                <h1>Ingredient List</h1>
                {ingredients}
            </section>
        )
    }

}

export default IngredientList