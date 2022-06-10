import React, { Component } from "react"
import IngredientList from "./components/IngredientList";
import BurgerPane from './components/BurgerPane'
import './App.css';

export default class App extends Component {

  state = {
    ingredients:
      [
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
      ],

    pickedIngredients: []
  }

  addIngredients = (ingredient) => {
    this.setState({ pickedIngredients: [ingredient, ...this.state.pickedIngredients] }) // spread operator - makes a copy of the original array
  }

  clearBurger = () => {
    this.setState({ pickedIngredients: [] })
  }

  render() {
    return (
      <>
        <IngredientList ingredients={this.state.ingredients} addIngredients={this.addIngredients} />
        <BurgerPane pickedIngredients={this.state.pickedIngredients} clearBurger={this.clearBurger} />
      </>
    )
  }
}
