import React, { Component } from 'react'
import Ingredient from './Ingredient'

// class IngredientList extends Component {
//   render() {
//     const ingredients = this.props.ingredients.map(ingredient=> {
//         return (
//             <Ingredient 
//                 ingredient={ingredient}
//                 addToBurger={this.props.addToBurger}
//             />
//         )
//     })

//     return (
//         <section className="ingredient-list">
//             <h1>Ingredient list</h1>
//             {ingredients}
//         </section>
//     )
//   }
// }

// export default IngredientList;



// functional component 

export default function IngredientList({ ingredients, addToBurger }) {

    const ingredientsList = ingredients.map(ingredient => {
        return (
            <Ingredient 
                ingredient={ingredient}
                addToBurger={addToBurger}
            />
        )
    })

    return (
        <section className="ingredient-list">
            <h1>Ingredient list</h1>
            {ingredientsList}
        </section>
    )
}