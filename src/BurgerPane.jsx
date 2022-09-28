// import React, { Component } from 'react'
import ClearBurger from './ClearBurger'
import BurgerStack from './BurgerStack'
import { useState } from 'react'

export default function BurgerPane(props) {
    return (
        <div>
            <BurgerStack 
                clickedIngredients={props.clickedIngredients}
            />

            <ClearBurger 
                handleBurgerClear={props.handleBurgerClear}
            />
        </div>
    )
}








// export default class BurgerPane extends Component {
//     render() {
//         return (
//             <div>
//                 <BurgerStack 
//                     clickedIngredients={this.props.clickedIngredients}
//                 />

//                 <ClearBurger 
//                     handleBurgerClear={this.props.handleBurgerClear}
//                 />
//             </div>
//         )
//     }
// }