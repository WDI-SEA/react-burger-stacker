import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
import styles from './App.css'

export default class App extends Component {

  state = {
    burgerStack: [],
    ingredients: this.ingredients
  }

  ingredients = [
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

  render() {
    return (
      <div>
        <h2>Burger Stacker!</h2>
        <div className='main'>
          
          
          <div className='ingredient-list'>
            <h2>Borger DNA</h2>
            <IngredientList
              ingredients={this.ingredients}
            />
          </div>

          <div className='burger-pane'>
            <h2>Crafted Borger</h2>
            <BurgerPane
            ingredients={this.ingredients}
            />
          </div>


      </div>

      </div>
    )
  }
}
