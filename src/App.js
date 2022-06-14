// import React, { Component } from 'react'
import IngredientList from './components/IngredientList'
import BurgerBox from './components/BurgerBox'
import { useState } from 'react'


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
  { name: 'Tomato', color: 'red' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'palevioletred' },
  { name: 'American Cheese', color: 'yellow' },
  { name: 'Swiss Cheese', color: 'goldenrod' },
  { name: 'Cheddar Cheese', color: 'gold' }
]

// export default class App extends Component {
//   state = {
//     burg: []
//   }

//   handleGrillBurger = (e) => {
//     const filteredIng = ingredients.filter(ingredient => {
//       return ingredient.name === e.target.value
//     })
//     this.setState((previousState) => {
//       const burg = [...previousState.burg]
//       burg.unshift(filteredIng[0])
//       return { burg: burg }
//     })
//   }

//   handleClear = () => {
//     this.setState({ burg: [] })
//   }

//   render() {
//     return (
//       <>

//         <h1>Welcome To the BBQ</h1>
//         <div className='grid'>
//           <IngredientList
//             list={ingredients}
//             onIngredientClick={this.handleGrillBurger}
//           />
//           <BurgerBox
//             burg={this.state.burg}
//             onClearClick={this.handleClear}
//           />
//         </div>
//       </>
//     )
//   }
// }


export default function App() {
  const [burg, setBurg] = useState([])
  handleSetBurg = () => {
    console.log('grilling')
  }
  return (
    <>
      <IngredientList
        ingredients={ingredients}
        onIngredientClick={setBurg}
      />
      <BurgerBox
        ingredients={ingredients}
      />
    </>
  )
}