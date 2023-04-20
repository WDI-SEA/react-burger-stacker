import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
import "./App.css"



export default class App extends Component{

  state = {
    burger: []
  }

  handleClearBurger = () => {
    this.setState({
      burger: []
    })
  }

  handleAddIngredient = (item) => {
    this.setState({
      burger: [...this.state.burger, item]
    })
  }

  render() {
    return(
      <div>
        <h1>hello app</h1>
        <div className='ingredient-list'>
          <IngredientList handleAddIngredient={this.handleAddIngredient}/>
        </div>

        <div className='burger-pane'>
          <BurgerPane handleClearBurger={this.handleClearBurger}/>
        </div>

      </div>
    )
  }
}
