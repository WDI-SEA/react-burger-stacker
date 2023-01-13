import './App.css';
import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

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
  state = {
    stack: [],
    ingredList: [...ingredientsArr]
  }

  handleAddToStack = e => {
    console.log('add to stack', e.target.innerText)
    const newStateIngredient = {
      name: e.target.innerText,
      color: e.target.style.backgroundColor
    }
    this.setState(prevState => {
      const stack = [...prevState.stack, newStateIngredient]
      return {stack}
    })
  }

  // better name option - handleClearStack
  handleRemoveFromStack = e =>{
    console.log('remove from stack', this.state.stack)
    this.setState({
      stack: []
    })
  }
  render() {
    return (
      <div className="container">
      <h1>Burger Stacker</h1>
        <IngredientList 
          items={this.state.ingredList}
          handleAddToStack={this.handleAddToStack}
        />

        <BurgerPane
         stack = {this.state.stack} 
         />

      </div>
    )
  }
}

