// FUNCTIONAL COMPONENT VERSION
import Ings from './Ings'

const BurgerStack = (props) => {
    let burgerIngs = props.clickedIngs.map(e => (
        <p>
            <Ings
                name={e.name}
                color={e.color}
            />
        </p>

    ))
    return (
        <div>
            {burgerIngs.reverse()}
        </div>
    )
}
export default BurgerStack

// CLASS-BASED VERSION
// import React, { Component } from 'react'
// import Ings from './Ings'

// export default class BurgerStack extends Component {
//     render() {
//         let burgerIngs = this.props.clickedIngs.reverse().map(e => (
//             <p>
//                 <Ings
//                     name={e.name}
//                     color={e.color} 
//                 />
//             </p>
//         ))
//         return (
//             <div>
//                 {burgerIngs}
//             </div>
//         )
//     }
// }