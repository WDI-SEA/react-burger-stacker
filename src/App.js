import React, {useState} from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

let burgerStuff = [
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
  const [ingredients, setIngredients] = useState(burgerStuff)
  const [burgerPaneIngredients, setBurgerPaneIngredients] = useState([])

  function addToStack(e) {
    let result = e.target.innerText
    // spread operator is the dot dot dot
    setBurgerPaneIngredients([result, ...burgerPaneIngredients])
  }

  function clearStack(e) {
    console.log("cleared!")
    setBurgerPaneIngredients([])
  }

  return (
    <div>
      <IngredientList ingredients={ingredients} action={addToStack} />

      <h2>BURGER STACK</h2>
      <BurgerPane ingredients={burgerPaneIngredients} action={clearStack}/>
    </div>
  );
}

export default App;
