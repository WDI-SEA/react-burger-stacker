// import React, { Component } from 'react'
import { useState } from 'react'

export default function Ingredient(props) {

    const styles = {
        backgroundColor: props.ingredient.color,
        color: props.ingredient.color === '#3F250B' ? 'white' : 'black' 
    }

    return (
        <div 
        style={styles}
        onClick={ props.handleIngredientClick ?
            () => props.handleIngredientClick(props.ingredient) :
            () => {}
        }
    >
        <p>{props.ingredient.name}</p>
    </div>
    )
}






// export default class Ingredient extends Component {
//     render() {
//         const styles = {
//             backgroundColor: this.props.ingredient.color,
//             color: this.props.ingredient.color === '#3F250B' ? 'white' : 'black' 
//         }

//         return (
//             <div 
//                 style={styles}
//                 onClick={ this.props.handleIngredientClick ?
//                     () => this.props.handleIngredientClick(this.props.ingredient) :
//                     () => {}
//                 }
//             >
//                 <p>{this.props.ingredient.name}</p>
//             </div>
//         )
//     }
// }