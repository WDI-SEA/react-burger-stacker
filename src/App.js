import './App.css';
import React, { Component } from 'react'
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';


class App extends Component {
  // declare state obj
  state = {
    burgerStack: []
  }
  // event handlers
  addToStack = (e) => {
    const newStateIngredient = {
      name: e.target.name,
      color: e.target.value
    }
    const stateCopy = this.state.burgerStack
    stateCopy.unshift(newStateIngredient)
    this.setState({
      burgerStack: stateCopy
    })
  }

  clearStack = () => {
    this.setState({ burgerStack: [] })
  }
  render() {
    return (
      <>
        <div className="app-row">
          <div>
            <IngredientList
              name={this.state.name} color={this.state.color} addToStack={this.addToStack}
            />
          </div>
          <div className="burger-row">
            <BurgerPane
              name={this.state.name} color={this.state.color} burgerStack={this.state.burgerStack} clearStack={this.clearStack}
            />
          </div>
        </div>
      </>
    )
  }
}



export default App;
