// import './App.css'
// import {Component} from 'react'
// import IngredientList from './IngredientList'
// import BurgerPane from './BurgerPane'

// class App extends Component {

//     state = {
//         // ingredients: this.props.ingredientsList
//         burgerIngredients: []
//     }

//     addToBurger = (ingredient) => {
//         // console.log('adding to burger')
//         // add the selected ingredient to the burgerIngredients state
//         // push the new ingredient to the burger
//         // this.setState((prevState, props) => ({
//         //     burgerIngredients: [...prevState.burgerIngredients, {name, color}]
//         // }))
//         // {name, color} = {name:name, color:color}
//         let newBurgerList = this.state.burgerIngredients
//         // newBurgerList.push(ingredient)
//         newBurgerList.unshift(ingredient)
//         this.setState({burgerIngredients: newBurgerList})
//     }

//     clearBurger = () => {
//         this.setState({burgerIngredients: []})
//     }

//     render() {
//         return(
//             <>
//                 <h1>Burgerstacker</h1>
//                 <main>
//                     <IngredientList 
//                         ingredients={this.props.ingredientsList} 
//                         addToBurger={this.addToBurger} 
//                     />
//                     <BurgerPane 
//                         burgerIngredients={this.state.burgerIngredients} 
//                         clearBurger={this.clearBurger}
//                     />
//                 </main>
//             </>
//         )
//     }

// }

// export default App

import { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default function App({ingredientsList}) {
    const [burgerIngredients, setBurgerIngredients] = useState([])
    const addToBurger = (ingredient) => {
        setBurgerIngredients([ingredient,...burgerIngredients])
    }
    const clearBurger = () => {
        setBurgerIngredients([])
    }
    return (
        <>
            <h1>Burgerstacker</h1>
            <main>
                <IngredientList 
                    ingredients={ingredientsList}
                    addToBurger={addToBurger}
                />
                <BurgerPane
                    burgerIngredients={burgerIngredients}
                    clearBurger={clearBurger}
                />
            </main>
        </>
    )
}