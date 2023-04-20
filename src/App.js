import React, { Component } from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

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
];

class App extends Component {
  state = {
    burgerStack: []
  }

  addIngredient = (ingredient) => {
    const updatedStack = [...this.state.burgerStack, ingredient];
    this.setState({ burgerStack: updatedStack });
  }

  clearBurger = () => {
    this.setState({ burgerStack: [] });
  }

  render() {
    return (
      <div>
        <IngredientList ingredients={ingredients} addIngredient={this.addIngredient} />
        <BurgerPane burgerStack={this.state.burgerStack} clearBurger={this.clearBurger} />
      </div>
    );
  }
}

export default App;
