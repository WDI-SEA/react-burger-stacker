import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

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

export default class App extends Component {
  state = {
    ingredients: ingredients,
    burger: [],
    name: '',
    color: ''
  }

  addToBurger = (e, name, color) => {
    this.setState(prevState => {
      const newStack = [{
        name,
        color
      }, ...prevState.burger]
      return {
        burger: newStack
      }
    })
  }

  clearBurger = () => {
    this.setState({ burger: [] })
  }

  undoIngredient = () => {
    this.setState(prevState => {
      const newStack = prevState.burger.slice(1)
      return { burger: newStack }
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addNewIngredient = e => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        ingredients: [
          ...prevState.ingredients,
          {
            name: prevState.name,
            color: prevState.color
          }
        ],
        name: '',
        color: ''
      }
    })
  }

  render() {
    return (
      <>
        <h1>Stacking some Burgers! 🍔</h1>

        <div className='container'>
          <IngredientList
            ingredients={this.state.ingredients}
            addIngredient={this.addToBurger}
            handleChange={this.handleChange}
            newIngredient={this.addNewIngredient}
            name={this.state.name}
            color={this.state.color}
          />

          <BurgerStack
            burger={this.state.burger}
            clearBurger={this.clearBurger}
            undoIngredient={this.undoIngredient}
          />
        </div>
      </>
    )
  }
}