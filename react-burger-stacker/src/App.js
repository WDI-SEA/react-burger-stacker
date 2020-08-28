import React, {useState} from 'react';
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


const App = (props) => {
  const [ingredients, setIngredients] = useState(props.ingredients)
  const [burgerPaneIngredients, setBurgerPaneIngredients] = useState([])
  //console.log(ingredients)

  function addToStack(e) {
    // get burgerSeed ingredient from user click event on IngredientList li
    let result = e.target.name
    // add clicked burgerSeed ingredient to setBurgerPaneIngredients
    console.log([result, ...burgerPaneIngredients])
    setBurgerPaneIngredients([result, ...burgerPaneIngredients])
  }

  function clearStack(e) {
    // on click of clear button
    // set burgerPaneIngredients to empty array
    setBurgerPaneIngredients([])
  }

  return (
    <>
      <h2>BURGER STACK</h2>
      <div className="body">
      <IngredientList ingredients={ingredients} action={addToStack} />
      <BurgerPane ingredients={burgerPaneIngredients} action={clearStack} />
      </div>
    </>
  );
}

export default App;
