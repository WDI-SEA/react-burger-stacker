import  React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList(props) {
    
        let list = props.ingredients.map(ingredient => (
            <li onClick={props.add}>
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

