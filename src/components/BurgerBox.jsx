// import React, { Component } from 'react'
import Burger from './Burger'

// export default class BurgerBox extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Eat Up!</h2>
//                 <Burger
//                     burg={this.props.burg}
//                 />
//                 <button
//                     onClick={this.props.onClearClick}
//                 >
//                     Clear
//                 </button>
//             </div>
//         )
//     }
// }

export default function BurgerBox() {
    return (
        <>
            <h4>Burger Box</h4>
            <Burger />
        </>
    )
}