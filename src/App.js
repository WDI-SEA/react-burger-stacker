// import React, { Component } from 'react'
import { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

export default function App() {
  const [clickedIngredients, setClickedIngredients] = useState([])

  const handleIngredientClick = ingredient => {
    setClickedIngredients([ingredient, ...clickedIngredients])
  }

  const handleBurgerClear = () => {
    setClickedIngredients([])
  }

  return (
      <div style={{ display: 'flex', margin: '3rem', alignItems: 'flex-end' }}>
        {/* will recieve ingredients a props and render them, and a event handler to handle ingredient clicks */}
        <IngredientList 
          ingredients={ingredients}
          handleIngredientClick={handleIngredientClick}
        />

        {/* will recive the clear button event handler, and the clicked ingredients from state to render */}
        <BurgerPane 
          clickedIngredients={clickedIngredients}
          handleBurgerClear={handleBurgerClear}
        />
    </div>
  )
}

// export default class App extends Component {
//   // have state that keeps track of clicked ingredients in an array
//   state = {
//     // array of ingredients that the user has clicked on
//     clickedIngredients: []
//   }

//   // click even handler -- when an ingredient is click, it will add that ingredient to that array in state of clicked ingredients
//   handleIngredientClick = ingredient => {
//     // console.log(e.target.innerText)
//     console.log(ingredient)
//     this.setState(prevState => {
//       // add the ingredient that was clicked to a new array with the old state's array spred into it
//       const clickedIngredients = [ingredient, ...prevState.clickedIngredients]
//       // merge the new array into state
//       return {
//         clickedIngredients
//       }
//     })
//   }

//   // clear button click handler, which will empty the array in state
//   handleBurgerClear = () => {
//     this.setState({
//       clickedIngredients: []
//     })
//   }

//   render() {
//     return (
//       <div style={{ display: 'flex', margin: '3rem', alignItems: 'flex-end' }}>
//         {/* will recieve ingredients a props and render them, and a event handler to handle ingredient clicks */}
//         <IngredientList 
//           ingredients={ingredients}
//           handleIngredientClick={this.handleIngredientClick}
//         />

//         {/* will recive the clear button event handler, and the clicked ingredients from state to render */}
//         <BurgerPane 
//           clickedIngredients={this.state.clickedIngredients}
//           handleBurgerClear={this.handleBurgerClear}
//         />
//       </div>
//     )
//   }
// }