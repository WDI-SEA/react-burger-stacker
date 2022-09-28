// import React, { Component } from 'react'
import Ingredient from './Ingredient'
import { useState } from 'react'

export default function IngredientList(props) {

    return (
        <div>
            {/* {ingredientComponents} */}
            {props.ingredients.map((item, i) => {
        return (
            <Ingredient 
                // pass in the click event handler
                ingredient={item}
                handleIngredientClick={props.handleIngredientClick}
                key={`ingredient-list-${i}`}
            />
        )
    })}
        </div>
    )
}





// export default class IngredientList extends Component {
//     render() {
//         const ingredientComponents = this.props.ingredients.map((item, i) => {
//             return (
//                 <Ingredient 
//                     // pass in the click event handler
//                     ingredient={item}
//                     handleIngredientClick={this.props.handleIngredientClick}
//                     key={`ingredient-list-${i}`}
//                 />
//             )
//         })

//         // ingredientComponents.push(<Ingredient ingredient={{ name: 'American Cheese', color: 'yellow' }} key={`ingrediant-list${ingredientComponents.length}`}  />)

//         return (
//             <div>
//                 {ingredientComponents}
//             </div>
//         )
//     }
// }