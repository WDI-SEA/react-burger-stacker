import { useState } from 'react'

function ClearBurger(props) {
    return (
        <div>
            <button onClick={props.handleBurgerClear}>Clear</button>
        </div>
    )
}

export default ClearBurger





// import React, { Component } from 'react'

// export default class ClearBurger extends Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handleBurgerClear}
//                 >
//                     Clear
//                 </button>
//             </div>
//         )
//     }
// }
