import './App.css';
import React, { Component } from 'react'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane';

const ingredientList = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
]
class App extends Component {
  state = {
    stack: [],
  }
  handleAdd = (e) => {
    console.log("add to stack")
  }
  handleRemove = (e) => {
    this.setState({
      stack: []
    })
  }
  render() {
    return (
      <>
        <h1>Burger Stacker</h1>
        <IngredientList items={ingredientArr} handleAdd={this.handleAdd} />
        <BurgerPane stack={this.state.stack} handleRemove={this.handleRemove}/>
      </>
    )
  }
}

export default App
