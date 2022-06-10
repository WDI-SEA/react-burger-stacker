import './App.css';
import React, { Component } from 'react'
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';

class App extends Component {
  state = {
    name: '',
    color: '',
    burgerStack: []
  }
  addToStack =  (e) => {
     this.setState({
      name: e.target.name,
      color: e.target.value
    })
    this.addStack()
  }
  addStack = () => {this.state.burgerStack.push({ name: this.state.name, color: this.state.color })}

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
