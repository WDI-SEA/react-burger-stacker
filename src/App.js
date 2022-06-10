import React, { Component } from 'react'
import BurgerPane from './components/BurgerPane.jsx'
import Ingredients from './components/Ingredients.jsx'
import "./App.css"

const allIngredients = [
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

export default class App extends Component {
  state = {
    allIngredients: allIngredients,
    ingredientsInBurger: []
  }

  handleAddIngredient = (e) => {
    e.preventDefault()
    const burgerArray = this.state.ingredientsInBurger
    const ingredientToAdd = {[e.target.name]:e.target.value}
    burgerArray.unshift(ingredientToAdd)   
    console.log(this.state.ingredientsInBurger)
    this.setState({
      ingredientsInBurger: burgerArray
    })
  }

  handleBurgerClear = () =>{
    this.setState({ingredientsInBurger:[]})
  }
  
  render() {
    return (
      <div className='App'>
        <div className='panes'>
          <Ingredients 
          allIngredients = {this.state.allIngredients}
          handleAddIngredientClick = {this.handleAddIngredient}
          ingredientsInBurger = {this.state.ingredientsInBurger}
          isBurgerPane = {false}
          />
        </div>
        <div className='panes'>
          <BurgerPane 
          ingredientsInBurger = {this.state.ingredientsInBurger}
          handleBurgerClear = {this.handleBurgerClear}
          isBurgerPane = {true}
          />
        </div>
      </div>
    )
  }
}
