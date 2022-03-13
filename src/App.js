// import React, { Component } from 'react'
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


// class App extends Component {
//   state = {
//     burgerIngredients: []
//   }

//   clearBurger= () => {
//     this.setState({burgerIngredients: []})
//   }

//   // pass this all the way down to the ingredient component
//   addToBurger = (ingredient) => {
//     console.log('adding to burger')
//     // add the selected ingredient to the burgerIngredients state
//     // we need to know what the ingredient is. how do we get the ingredient?
//     // push the new ingredient to the burger
//     // with implicit return
//     // this.setState((prevState, props)=>({
//     //  burgerIngredients: [...prevState.burgerIngredients, {name:name, color:color}]
//     // }))
//     // which is the same as
//     // this.setState((prevState, props)=>{
//     //   return {burgerIngredients: [...prevState.burgerIngredients, {name:name, color:color}]}
//     // })
//     // and is the same as
//     let newBurgerList = this.state.burgerIngredients
//     // newBurgerList.push(ingredient) // this stacks it in the opposite direction
//     newBurgerList.unshift(ingredient) // this will stack it in the correct order/ bottom to top
//     this.setState({burgerIngredients: newBurgerList})
//   }

//   render() { 
//     return ( // it can't return more than one. it can only return a single jsx element
//       <>
//         <h1 className='center'> The Burger Stacker</h1>
//         <main className='split'>
//           <IngredientList 
//               ingredients={this.props.ingredientsList} 
//               addToBurger={this.addToBurger}
//           />
//           <BurgerPane 
//             burgerIngredients={this.state.burgerIngredients}
//             clearBurger={this.clearBurger}
//           />
//         </main>
//       </>
//     );
//   }
// }
 
// export default App;




// functional component 

import React, { useState } from 'react'

export default function App({ ingredientsList }) {
  const [burger, setBurger] = useState({
    burgerIngredients: []
  })

  const clearBurger= () => {
    setBurger({burgerIngredients: []})
  }

  const addToBurger = (ingredient) => {
    console.log('adding to burger')
    let newBurgerList = burger.burgerIngredients
    newBurgerList.unshift(ingredient) // this will stack it in the correct order/ bottom to top
    setBurger({burgerIngredients: newBurgerList})
  }

  return (
    <>
      <h1 className='center'> The Burger Stacker</h1>
      <main className='split'>
        <IngredientList 
          ingredients={ingredientsList} 
          addToBurger={addToBurger}
        />
        <BurgerPane 
          burgerIngredients={burger.burgerIngredients}
          clearBurger={clearBurger}
        />
      </main>
    </>
  )
}