import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {
        return (
            <div>
                <BurgerStack clickedIngs={this.props.clickedIngs}/>
                <ClearBurger clearBurger={this.props.clearBurger}/>
            </div>
        )
    }
}

// FUNCTIONAL COMPONENT METHOD
// import React from 'react'
// import BurgerStack from './BurgerStack'
// import ClearBurger from './ClearBurger'

// const BurgerPane = () => {
//     return (
//         <div>
//             <BurgerStack />
//             <ClearBurger />
//         </div>
//     )
// }

// export default BurgerPane