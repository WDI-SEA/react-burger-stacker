import React, { Component } from 'react'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

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
    clickedIngredient: []

  }
  handleIngredientClick = (food) => {
    console.log(food)
  }

  render() {
    return (
      <>
        <IngredientList ingredients={ingredients} 
        handleIngredientClick={this.handleIngredientClick}
        />
        <BurgerPane 
        ingredients={this.state.clickedIngredient}
        />
      </>
    )
  }
}