import React, { useState } from 'react';
import './App.css';
import IngredientsList from './IngredientList';
import BurgerPane from './BurgerPane';

function App() {
	let [ingredients, setIngredients] = useState([
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
	]);


let [chosenIngredients, setChosenIngredients] = useState([]);

let addIngredient = (e, ingredients) => {
	e.preventDefault();
	console.log(ingredients);
	setChosenIngredients([ingredients, ...chosenIngredients]);
};

let clearBurger = () => {
	setChosenIngredients( [] );
};

return(
  <div className="container">
   <h1>Minute Burger</h1>
  <div class="App">
    <div class="item">
      <IngredientsList ingredients={ingredients} addIngredient={addIngredient} />
    </div>
    <div class="item">
      <BurgerPane chosenIngredients={chosenIngredients} clearBurger={clearBurger} />
    </div>
  </div>

  </div>
 
)

}




export default App;