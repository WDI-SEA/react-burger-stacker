import React, { Component } from "react"
import Interact from "./Interact"
import Stacker from "./Stacker"

export default class App extends Component {
  state = {
    stacked: []
  }

  addIngredient = (ingredient) => {
    // console.log(`added ${ingredient} to stack`)
  
    this.setState(prevState => {
      return (
        { stacked: [ingredient, ...prevState.stacked] }
      )
    })
    console.log(this.state.stacked)
  }

  clearStack = () => {
    console.log('cleared')
    this.setState({
      stacked: []
    })
  }

  render() {
    const items = [
      'seasame bun',
      'brioche bun',
      'gluten-free bun',
      'jalepeno',
      'bacon',
      'pickle',
      'onion',
      'tomato',
      'lettuce',
      'american cheese',
      'cheddar cheese',
      'pepperjack cheese',
      'angus patty',
      'spicy patty',
      'veggie patty',
      'seasame bun',
      'brioche bun',
      'gluten-free bun'
    ]

    return (
      <div className="stacker-ctnr">
        <Interact
          items={items}
          addIngredient={this.addIngredient}
        />

        <Stacker 
          stacked={this.state.stacked}
          clearStack={this.clearStack}
        />
      </div>
    )
  }
}