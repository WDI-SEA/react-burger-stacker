// FUNCTIONAL COMPONENT VERSION
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
    return (
        <div>
            <BurgerStack clickedIngs={props.clickedIngs}/>
            <ClearBurger clearBurger={props.clearBurger}/>
        </div>
    )
}
export default BurgerPane

// CLASS-BASED VERSION
// import React, { Component } from 'react'
// import BurgerStack from './BurgerStack'
// import ClearBurger from './ClearBurger'

// export default class BurgerPane extends Component {
//     render() {
//         return (
//             <div>
//                 <BurgerStack clickedIngs={this.props.clickedIngs}/>
//                 <ClearBurger clearBurger={this.props.clearBurger}/>
//             </div>
//         )
//     }
// }