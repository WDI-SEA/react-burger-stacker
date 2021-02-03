import React, { Component } from 'react'
import './App.css';
import Ingredients from './Ingredients'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


const ingredients = 
[
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Tide Pod', color: '#3336FF'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

class App extends Component{
  state = {
    burger: [],
    newIngredient:''
}

  render() {
    return (
      <div className="App">
        <div>
          {ingredients.map((ingredient) => (
            <IngredientList ingredient={ingredient} />
          ))}
        </div>
        <div>
          <BurgerPane />
        </div>
      </div>
    );
  }
}
export default App;
