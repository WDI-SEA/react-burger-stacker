import React, { Component } from "react"
import Interact from "./Interact"
import Stacker from "./Stacker"

export default class App extends Component {
  state = {
    stacked: []
  }

  addIngredient = (ingredient) => {
    console.log('stacked')
  
    this.setState(prevState => {
      return (
        { stacked: [...prevState.stacked, ingredient] }
      )
    })
  }

  clearStack = () => {
    this.setState({
      stacked: []
    })
  }

  render() {
    const items = [
      'bun',
      'bun',
      'bun',
      'onion',
      'tomato',
      'lettuce',
      'cheese',
      'cheese',
      'cheese',
      'patty',
      'patty',
      'patty',
      'bun',
      'bun',
      'bun'
    ]
    
    return (
      <div className="stacker-ctnr">
        <Interact
          items={items}
        />

        <Stacker 
          stacked={this.state.stacked}
        />
      </div>
    )
  }
}