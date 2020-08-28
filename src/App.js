import React, { useState } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';


function App() {
  let [ingredients, setIngredients] = useState([
    {name: 'Kaiser Bun', color: 'saddlebrown', image: 'https://i.imgur.com/SrsuY3O.png'},
    {name: 'Sesame Bun', color: 'sandybrown', image: 'https://i.imgur.com/Tl6wlm6.png'},
    {name: 'Gluten Free Bun', color: 'peru', image: 'https://i.imgur.com/FjVHt8J.png'},
    {name: 'Lettuce Wrap', color: 'olivedrab', image: 'https://i.imgur.com/Svp69ff.png'},
    {name: 'Beef Patty', color: '#3F250B', image: 'https://i.imgur.com/8fykny6.png'},
    {name: 'Soy Patty', color: '#3F250B', image: 'https://i.imgur.com/LkhOYzC.png'},
    {name: 'Black Bean Patty', color: '#3F250B', image: 'https://i.imgur.com/o7gzxXe.png'},
    {name: 'Chicken Patty', color: 'burlywood', image: 'https://i.imgur.com/gN9cnV8.png'},
    {name: 'Lettuce', color: 'lawngreen', image: 'https://i.imgur.com/Svp69ff.png'},
    {name: 'Tomato', color: 'tomato', image: 'https://i.imgur.com/x3mURre.png'},
    {name: 'Bacon', color: 'maroon', image: 'https://i.imgur.com/FjnNDNq.png'},
    {name: 'Onion', color: 'lightyellow', image: 'https://i.imgur.com/lIMuJY1.png'}
  ])
  let [chosenIngredients, setChosenIngredients] = useState([]);

  let addIngredient = (e, ingredients) => {
    e.preventDefault();
    console.log(ingredients)
    console.log(chosenIngredients)
    setChosenIngredients([ingredients, ...chosenIngredients])
  }

  let clearBurger = () => {
    setChosenIngredients ( [] )
  }
  return(
    <div class="container">
      <div class="App">
        <div class="item">
          <IngredientList ingredients={ingredients} addIngredient={addIngredient} />
        </div>
        <div class="item">
          <BurgerPane chosenIngredients={chosenIngredients} clearBurger={clearBurger} />
        </div>
      </div>
      <div class="menu">

      </div>
    </div>
  )
}

export default App;

