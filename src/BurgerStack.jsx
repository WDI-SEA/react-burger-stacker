import React, { Component } from 'react'
import Ings from './Ings'


export default class BurgerStack extends Component {
    render() {
        let burgerIngs = this.props.clickedIngs.reverse().map(e => (
            <p>
                <Ings
                    name={e.name}
                    color={e.color} 
                />
            </p>
        ))
        return (
            <div>
                {burgerIngs}
            </div>
        )
    }
}

// FUNCTIONAL COMPONENT METHOD
// import React from 'react'
// import BurgerIngList from './BurgerIngList'

// const BurgerStack = () => {
//     return (
//         <div>
//             <BurgerIngList />
//             <h3>BurgerStack</h3>
//         </div>
//     )
// }

// export default BurgerStack