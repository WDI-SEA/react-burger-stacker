// import React, { Component } from 'react'
import Ingredient from './Ingredient'
import { useState } from 'react'

export default function BurgerStack(props) {
    const ingredientComponents = props.clickedIngredients.map((item, i) => {
        return (
            <Ingredient 
                ingredient={item}
                key={`burgerlist-ingredient${i}`}
            />
        )
    })

    return (
        <div>
            {ingredientComponents}
        </div>
        
    )
}









// export default class BurgerStack extends Component {
//     render() {
//         const ingredientComponents = this.props.clickedIngredients.map((item, i) => {
//             return (
//                 <Ingredient 
//                     ingredient={item}
//                     key={`burgerlist-ingredient${i}`}
//                 />
//             )
//         })

//         return (
//             <div>
//                 {ingredientComponents}
//             </div>
//         )
//     }
// }

// ternary statements = if/else
// condition ? what to return if true : what to return if false
// if (condition) {
    // what to return if true
// } else {
    // what to return if false
// }