import React, { Component } from 'react';
import './App.css';

const ingredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheese', color: 'rgb(245, 145, 14)' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      burgerStack: [],
    };

    this.addIngredient = this.addIngredient.bind(this);
    this.clearBurger = this.clearBurger.bind(this);
  }

  addIngredient(ingredient) {
    this.setState({
      burgerStack: [ingredient, ...this.state.burgerStack],
    });
  }

  clearBurger() {
    this.setState({
      burgerStack: [],
    });
  }

  render() {
    const { burgerStack } = this.state;

    return (
      <div className="app">
        <div className="ingredient-list">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                <button onClick={() => this.addIngredient(ingredient)}>
                  {ingredient.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="burger-pane">
          <h3>Burger Stack</h3>
          <div className="burger-stack">
            {burgerStack.length === 0 ? (
              <p>Add some ingredients!</p>
            ) : (
              burgerStack.map((ingredient, index) => (
                <div
                  key={index}
                  className={ingredient.name.toLowerCase()}
                ></div>
              ))
            )}
          </div>
          <button onClick={this.clearBurger}>Clear Burger</button>
        </div>
      </div>
    );
  }
}

export default App;
