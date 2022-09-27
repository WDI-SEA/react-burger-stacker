import React, {Component} from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
import './App.css'

export default class App extends Component {

  state = {
    ingredients: [
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
    ],

  }


  render() {
    return (
      <div className='Container'>
        <div className='CreateCol'>
          <h1>This is the Main app it holds the List of ingredients</h1>
          <IngredientList ingredients={this.state.ingredients} />
        </div>

        <div className='DisplayCol'>
          <h1>And the BurgerPane</h1>
          <BurgerPane />
        </div>
      </div>
    )
  }
}