// import React, { Component } from 'react'
import Ingredient from './Ingredient'
import { useState } from 'react'

// export default class IngredientList extends Component {
//     render() {
//         const ingredientComponents = this.props.list.map((ingredient, i) => {
//             return (
//                 <Ingredient
//                     key={i}
//                     name={ingredient.name}
//                     color={ingredient.color}
//                     onIngredientClick={this.props.onIngredientClick}
//                 />
//             )
//         })
//         return (
//             <div>
//                 <h2>Ingredients:</h2>
//                 {ingredientComponents}
//             </div>
//         )
//     }
// }

export default function IngredientList(ingredient, props) {
    const [ing, setIngredients] = useState(ingredient.ingredients)
    const mappedIng = ing.map((ingredient, i) => {
        return (
            <Ingredient
                key={`ingredient${i}`}
                name={ingredient.name}
                color={ingredient.color}
                onIngredientClick={props.onIngredientClick}
            />
        )
    })
    return (
        <>
            <h2>Ingredient List</h2>
            {mappedIng}
        </>
    )
}