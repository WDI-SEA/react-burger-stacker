import logo from './logo.svg';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';
import React, { Component } from 'react';


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
  {name: 'Tomato', color: 'red'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'beige'},
  {name: 'Red Onion', color: '#a2005c'},
  {name: 'Swiss Cheese', color: 'LightYellow'},
  {name: 'Grilled Mushrooms', color: 'saddlebrown'},
  {name: 'American Cheese', color: 'gold'},
  {name: 'Cheddar Cheese', color: 'goldenrod'}
]


export default class App extends Component {
  state = {
    burger: []
  }
  handleClear = () => {
    this.setState({burger:[]})
  }
  onIngredientClick = (e) => {
    const filteredIngredients = ingredients.filter(ingredient => {
      return ingredient.name === e.target.value
    })
    // console.log(filteredIngredients)
    this.setState((previousState) => {
      const burger = [...previousState.burger]
      burger.unshift(filteredIngredients[0])
      return {burger: burger}
    })
  }
  render() {
    return (
      <>
        <h1>Build Your Own Burger</h1>
        <div className='grid'>
          <IngredientList 
          list={ingredients}
          onIngredientClick={this.onIngredientClick}
          />
          
          <BurgerPane 
            burger={this.state.burger}
            handleClear={this.handleClear}
          />
        </div>
      </>
    );

  }
}


