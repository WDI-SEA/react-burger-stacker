import React, { Component } from 'react'
import './App.css'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

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

state = {
  stack: []
}

handleAdd = (e) => {
  console.log('adding an ingredient')

  const newIngredient = {
    name: e.target.innerText
  }
}


handleRemove = (e) => {
  console.log('removing')
  this.setState({
    stack:[]
  })
}


export default class App extends Component {
  render () {
    return (
      <>
        <h1>Burger Stacker</h1>
        <IngredientList 
            list={ingredients}
            handleAdd={this.handleAdd} />
        <BurgerPane
            stack={this.state.stack}
            handleRemove={this.handleRemove} />

      </>
    )
  }
}