// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

const App = () => {

  const [ingredients, setIngredients] = useState([
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
  ])

  const [burgerStack, setBurgerStack] = useState([])

  const [item, setItem] = useState({
    name: '',
    color: ''
  })

  const isStacked = () => {

  }

  const addToBurger = (ingredient) => {
    let newBurgerList = [...burgerStack]
    newBurgerList.unshift(ingredient)
    setBurgerStack(newBurgerList)
  }

  const clearStack = () => {
    setBurgerStack([])
  }

  const addNewIngredient = (item) => {
    let temp = [...ingredients, item]
    setIngredients(temp)
  }

  const submitIngredient = (e) => {
    e.preventDefault()
    addNewIngredient(item)

  }

  return (
    <>
      <div>

        <form onSubmit={submitIngredient}>
          <label htmlFor='newIngredientName'>Add to the Ingredient List:Name:</label>
          <input
            type='text'
            name='name'
            id='newIngredientName'
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
          <br />
          <label htmlFor='newIngredientColor'>Add to the Ingredient List:Color:</label>
          <input
            type='text'
            name='color'
            id='newIngredientColor'
            value={item.color}
            onChange={(e) => setItem({ ...item, color: e.target.value })}
          />
          <br />
          <button >Submit</button>
        </form>

        <div className='container'>
          <IngredientList
            addToBurger={addToBurger}
            ingredients={ingredients}
          />
        </div>
        <div className='container'>
          <BurgerPane
            clearStack={clearStack}
            burgerStack={burgerStack}
          // ingredients={ingredients}
          />

        </div>
      </div>
    </>
  )

}


// class App extends Component {
//   state = {
//     ingredients: [
//       { name: 'Kaiser Bun', color: 'saddlebrown' },
//       { name: 'Sesame Bun', color: 'sandybrown' },
//       { name: 'Gluten Free Bun', color: 'peru' },
//       { name: 'Lettuce Wrap', color: 'olivedrab' },
//       { name: 'Beef Patty', color: '#3F250B' },
//       { name: 'Soy Patty', color: '#3F250B' },
//       { name: 'Black Bean Patty', color: '#3F250B' },
//       { name: 'Chicken Patty', color: 'burlywood' },
//       { name: 'Lettuce', color: 'lawngreen' },
//       { name: 'Tomato', color: 'tomato' },
//       { name: 'Bacon', color: 'maroon' },
//       { name: 'Onion', color: 'lightyellow' }
//     ],
//     stack: [],
//     // newIngredient: '',
//     name: '',
//     color: ''
//   }

//   handleClicker = (ingredient) => {
//     let stackCopy = [...this.state.stack]
//     stackCopy.unshift(ingredient)
//     this.setState((prevState) => ({
//       stack: stackCopy
//     }))
//   }

//   clearStack = () => {
//     this.setState({
//       stack: []
//     })
//   }

//   textChangeHandler = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     }, () => console.log(this.state.name, this.state.color))
//   }

//   addNewIngredient = (name, color) => {
//     let temp = [...this.state.ingredients]
//     let newIngredient = { name: this.state.name, color: this.state.color }
//     temp.push(newIngredient)
//     this.setState({
//       ingredients: temp,
//       name: '',
//       color: ''
//     }, () => console.log(this.state.ingredients))
//   }

//   submitIngredient = (e) => {
//     e.preventDefault()
//     this.addNewIngredient(this.state.name, this.state.color)

//   }

//   render() {
//     return (
//       <>
//         <div>

//           <form onSubmit={this.submitIngredient}>
//             <label htmlFor='newIngredientName'>Add to the Ingredient List:Name:</label>
//             <input
//               type='text'
//               name='name'
//               id='newIngredientName'
//               value={this.state.name}
//               onChange={this.textChangeHandler}
//             />
//             <br />
//             <label htmlFor='newIngredientColor'>Add to the Ingredient List:Color:</label>
//             <input
//               type='text'
//               name='color'
//               id='newIngredientColor'
//               value={this.state.color}
//               onChange={this.textChangeHandler}
//             />
//             <br />
//             <button >Submit</button>
//           </form>
//           <div className='container'>
//             <IngredientList
//               handleClicker={this.handleClicker}
//               burgerStack={this.state.stack}
//               ingredients={this.state.ingredients}
//             />
//           </div>
//           <div className='container'>
//             <BurgerPane
//               clearStack={this.clearStack}
//               burgerStack={this.state.stack}
//               ingredients={this.state.ingredients}
//             />

//           </div>
//         </div>
//       </>
//     )
//   }
// }
export default App;
