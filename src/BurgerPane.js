// import './App.css'
// import {Component} from 'react'
// import Ingredient from './Ingredient'
// import Clear from './Clear'

// class BurgerPane extends Component {
// state= {
//     key: 'value'
// }
//     render() {
//         const burger = this.props.burgerIngredients.map((layer,idx) => {
//             return <Ingredient ingredient={layer} key={`layer-${idx}`} />
//         })
//         return (
//             <section className='burger-pane'>
//                 <h1>Burger Pane</h1>
//                 {burger}
//                 <Clear clearBurger={this.props.clearBurger}/>
//             </section>
//         )
//     }

// }

// export default BurgerPane

import Ingredient from './Ingredient'
import Clear from './Clear'

export default function BurgerPane({burgerIngredients,clearBurger}) {
    const burger = burgerIngredients.map((layer,idx) => {
        return <Ingredient ingredient={layer} key={`layer-${idx}`} />
    })
    return (
        <section className='burger-pane'>
            <h1>Burger Pane</h1>
            {burger}
            <Clear clearBurger={clearBurger} />
        </section>
    )
}