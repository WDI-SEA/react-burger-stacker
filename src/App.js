import React, { Component } from 'react';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

let ingredientsArray = [
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
]

class App extends Component {
  state = {
    ingredients: ingredientsArray,
    burgerIngredients: []
    } 

    addToBurger = (event) => {
      let burgerArray = this.state.burgerIngredients
      // add clicked ingredient to burgerIngredients array
      burgerArray.unshift(event.target.name)
      console.log(burgerArray)
      // set state
      this.setState({
        burgerIngredients: burgerArray
      })
    }

    clearBurger = () => {
      // setstate of burgerIngredients empty
      this.setState({
        burgerIngredients: []
      })
    }

  render() {
    return (
      <div>
        <IngredientList addToBurger={this.addToBurger} ingredients={this.state.ingredients}/>
        <BurgerPane clearBurger={this.clearBurger} burgerIngredients={this.state.burgerIngredients}/>
      </div>
    );
  }
}
 
export default App;