import './App.css'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
import React, { Component } from 'react'

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
    burgerIngredients: []
  }

  handleClick = (e) => {
    const ingredient = {'name': e.target.innerText, 'color': e.target.style.backgroundColor}
    
    const newBurgerIngredients = [...this.state.burgerIngredients]
    newBurgerIngredients.unshift(ingredient)
  
    this.setState({
      burgerIngredients: newBurgerIngredients
    })
  }

  clearBurger = () => {
    this.setState({
      burgerIngredients: []
    })
  }

  render() {
  return (
    <div className='container'>
      <IngredientList ingredients={ingredients} handleClick={this.handleClick} />
      <BurgerPane ingredients={this.state.burgerIngredients} clearBurger={this.clearBurger} />
    </div>
  )
  }
}