import React, { useState } from 'react';
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'




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



function App() {

const [ingredients, setIngredients] = useState(burgerSeed)
const [burgerPaneIngredients, setBurgerPaneIngredients] = useState([])

function addToStack(e) {
  console.log('Ingredient was clicked ! ')
  // get burgerSeed ingredient from user click event on IngredientList li
  let result = e.target.innerText
  console.log(result)
  // add clicked burgerSee ingredient to seBurgerPaneIngrredients
setBurgerPaneIngredients([result, ...burgerPaneIngredients])
console.log(burgerPaneIngredients)
}

function clearStack(e) {
  //on click of clear button
  // set burgerPaneIngredients to emplty array
  setBurgerPaneIngredients([])
}


return (


  <div className="App">
    <IngredientList ingredients ={ingredients} action={addToStack} />
    <BurgerPane ingredients ={burgerPaneIngredients} action={clearStack}/>
 
  </div>
)

}

export default App;
