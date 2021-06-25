// FUNCTIONAL COMPONENT METHOD
import Ings from './Ings'

const IngList = (props) => {
    const ingredients = props.ingredients.map(e => {
        return (
            <p onClick={(e) => props.addToBurger(e)}>
                <Ings
                    name={e.name}
                    color={e.color} 
                />
            </p>
        )
    })
    return (
        <div>
            {ingredients}
            <h2>Ingredients</h2>
        </div>
    )
}
export default IngList

// CLASS-BASED VERSION
// import React, { Component } from 'react'
// import Ings from './Ings'

// export default class Inglist extends Component {
//     render() {
//         let ingredients = this.props.ingredients.map(e => (
//             <p onClick={(e) => this.props.addToBurger(e)}>
//                 <Ings
//                     name={e.name}
//                     color={e.color} 
//                 />
//             </p>
//         ))
//         return (
//             <div>
//                 {ingredients}
//                 <h2>IngList</h2>
//             </div>
//         )
//     }
// }
