import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import IngredientsList from './IngredientsList'
import BurgerPane from './BurgerPane'
import BurgerStack from './BurgerStack';

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'American Cheese', color: 'gold'},
  {name: 'Provolone', color: 'cornsilk'},
  {name: 'Swiss Cheese', color: 'ivory'},
  {name: 'Cheddar', color: 'orange'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'},
]


export default class App extends Component{
  state = {
    ingredients: this.ingredients,
    stack: []
  }

  handleIngredientClick = (newIngredient) => {
    
    this.setState(prevState => {
      return {
        stack: [newIngredient, ...prevState.stack]
      }
    })
  }

  clearStack = () => {
    this.setState({
      stack: []
    })
  }
  
  render() {
    return(
      <>
        <div class="burgerStackerHeader">
          <div class="App-logo" id="burger2">🍔</div><h1>Burger Stacker</h1><div class="App-logo" id="burger">🍔</div>
        </div>
        <div class="burgerDiv">
          <div class="ingredients">
            <h2>Ingredients List</h2>
            <IngredientsList 
              ingredients={ingredients}
              stack={this.state.stack}
              handleIngredientClick={this.handleIngredientClick}
            />
          </div>
          <div class="spacer"></div>
          <div class="ingredients">
            <div class="burgerPaneHeader">
              <h2>Burger Pane</h2>
              <button class="clearButton" onClick={this.clearStack}>Clear Burger</button>
            </div>
            <div class="burgerPane">
            <BurgerPane 
              stack={this.state.stack}
            />
            </div>
          </div>
        </div>
      </>
    )
  }
}
