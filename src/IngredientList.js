import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        // const ingredientComponents = this.props.ingredients.maps((item, i) => {
        //     return (
        //         <Ingredient
        //             // pass in the click event handler
        //             ingredient={item}
        //             key={`ingredient-list-${i}`}
        //         />
        //     )
        // })


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
                    
                    {/* {ingredientComponents} */}
                </ul>
            </section>
        )
    }
}
