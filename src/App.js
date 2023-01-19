import React, { Component } from 'react'


import IngredientList from './IngredientList.js'
import './App.css';
import BurgerPane from './BurgerPane.js';


const ingredientsArr = [
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
  state ={
    stack: [],
    ingredientList: [...ingredientsArr]
  }
  handleAddToStack = e => {
    console.log("add to stack", e.target.innerText)
    const newStateIngredient = {
        name: e.target.innerText,
        color: e.target.style.backgroundColor
    }
    this.setState(prevState => {
      const stack = [...prevState.stack, newStateIngredient]
      return {stack}
    })
  }

  handleRemoveFromStack = e => {
    console.log("remove from stack")
  }
  render() {
    return (
      <>
        <h2>Burger Stacker</h2> 
        <IngredientList 
          items={this.state.ingredientList} 
          handleAddToStack={this.handleAddToStack}/>
        <BurgerPane
          stack={this.state.stack}
          handleRemoveFromStack={this.handleRemoveFromStack} />
      </>
    )
  }
}