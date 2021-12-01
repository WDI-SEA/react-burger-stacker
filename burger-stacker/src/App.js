import React, { Component } from 'react'
import './App.css';
import IngredientMenu from './IngredientMenu';


const ingredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' }
]

const emptyBurger = []

class App extends Component {
  state = {
    burgerIngredients: []
  }
  addIngredient = (e) => {
    e.preventDefault()
    console.log(e)
  }
  render() {
    return (
      <div className="App">
        <h1>burger stacker?</h1>
        <IngredientMenu ingredients={ingredients} addIngredient={this.addIngredient} />

        <div className="BurgerDisplay">
          <p>The Burger will go here</p>
        </div>
      </div>
    )
  }
}


// function App() {
//   // function to identify that a button has been clicked
//   const addIngredient = (e) => {
//     e.preventDefault()
//     console.log(e)
//   }
//   return (
//     <div className="App">
//       <h1>burger stacker?</h1>
//       <IngredientMenu ingredients={ingredients} addIngredient={this.addIngredient} />

//       <div className="BurgerDisplay">
//         <p>The Burger will go here</p>
//       </div>
//     </div>
//   );
// }

export default App;
