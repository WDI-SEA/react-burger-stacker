import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
import styles from './App.css'

export default class App extends Component {

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
      <div className='main'>
        
        <div className='ingredient-list'>
          <IngredientList
          ingredients={this.ingredients}
          />
        </div>

        <div className='burger-pane'>
          <BurgerPane
          ingredients={this.ingredients}
          />
        </div>

      </div>
    )
  }
}
