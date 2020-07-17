import React, {useState} from 'react';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
import Ingredient from './Ingredient'


// storing outside of function so it's retrievable in other components
let stack = [
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


function App() {
  // use state hook to track update of ingrdient data 
  const [ingredients, setIngredients] = useState(stack)
  const [burgerPaneIngredients, setBurgerPaneIngredients] = useState([])
  // clear stack and then call on new state again
  // const clearIngredient = () => {
  //   setIngredients([])
  

  function addIngredient(e) {
    // render new stack once we choose another ingredient, pull data from stack array
    let result = e.target.innerText
    setBurgerPaneIngredients([result, ...burgerPaneIngredients])
  }

  function clearStack(e) {
    // on click of clear button - set burger pane ingredients to empty array
    setBurgerPaneIngredients([])
  }

  return (
    <div className="App">
      <h1>Build your burger!</h1> 
      <IngredientList ingredients={ingredients} action={addIngredient} />
      <h2>Burger Stack</h2> 
      <BurgerPane ingredients={burgerPaneIngredients} action={clearStack} />
    </div>
  );
}

export default App;
