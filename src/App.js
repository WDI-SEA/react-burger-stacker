import React, { useState } from 'react';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

let burgerSeed = [
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
  { name: 'Onion', color: 'lightyellow' }
]

function App() {
  //use state hook totrack update of ingredient data
  const [ingredients, setIngredients] = useState(burgerSeed)
  const [burgerPaneIngredients, setBurgerPaneIngredients] = useState([]) //setting to an empty array

  function addToStack(e) {
    // console.log(`Ingredient was clicked!`)  
    // get burgerSeed ingredient from user click event in ingredient list li
    let result = e.target.innerText
    // console.log(result) this is to check what is being clicked what the 'innerText' is
    //add clicked burgerSeed ingredient to setBurgerPaneIngredeints
    console.log([result, ...burgerPaneIngredients])
    setBurgerPaneIngredients([result, ...burgerPaneIngredients])
    console.log(burgerPaneIngredients)
    //.push added to the array(back of array) we want to add to the bottom of the array
    // ... is called the spread opperator allows you to access an array without nesting arrays
  }

function clearStack(e) {
  //click clear
  //set burgerPaneIngredients to be an empty array
  setBurgerPaneIngredients([])
}

  return (
    <div className="App">
      <IngredientList ingredients={ingredients} action={addToStack} />
      <h1>Burger!</h1>
      <BurgerPane ingredients={burgerPaneIngredients} action={clearStack}/>

    </div>
  );
}

export default App;
