// FUNCTIONAL VERSION
const ClearBurger = (props) => {
    return (
        <p>
            <button onClick={(e) => props.clearBurger(e)}>
                Clear Burger Stack
            </button>
        </p>
    )
}
export default ClearBurger

// CLASS-BASED VERSION
// import React, { Component } from 'react'

// export default class ClearBurger extends Component {
//     render() {
//         return (
//             <p>
//                 <button onClick={(e) => this.props.clearBurger(e)}>
//                     Clear Burger Stack
//                 </button>
//             </p>
//         )
//     }
// }
