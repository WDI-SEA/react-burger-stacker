import React, { useState } from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';


function App() {

  let burgerSeed = [
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

    // use state hook to track update of ingredient data
    const [ingredients, setIngredients] = useState(burgerSeed);
    const [burgerPaneIngredients, setBurgerPaneIngredients] = useState([]);

    function addToStack(e) {
      let result = e.target.innerText;
      // get burgerSeed ingredient from user clisk event on IngredientList li
      // add clicked burgerSeed ingredient to setBurgerPane
      setBurgerPaneIngredients([result, ...burgerPaneIngredients]);
    }

    function clearStack(e) {
      // on click of clear button
      // set burgerPaneIngredients to empty array
      setBurgerPaneIngredients([]);
    }

  return (


    <div className="App"> 
      <IngredientList ingredients={ingredients} action={addToStack} />
      <hr />
      <hr />
      <h2>BURGER STACK!</h2>
      <BurgerPane ingredients={burgerPaneIngredients} action={clearStack} />
    </div>
  );
}

export default App;
