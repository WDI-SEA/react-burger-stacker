import React, { useState } from 'react';
import './App.css';
import BurgerArea from './BurgerArea'
import IngredientArea from './IngredientArea'

function App(props) {
  const [selectedIngredients, setSelectedIngredients] = useState([])

  const addIngredient = (i) => {
    setSelectedIngredients([...selectedIngredients, props.ingredients[i]])
  }

  const emptyArray = () => {
    setSelectedIngredients([])
  }

  const undoLast =() => {
    let newList = selectedIngredients
    newList.pop()
    setSelectedIngredients([...newList])
  }
  return (
    <>
      <h1>Burger Stack Joint</h1>
      <div className="App">
      <div className="ingredient">
        <IngredientArea ingredients={props.ingredients} handleClick={addIngredient} />
      </div>
      <div className="ingredient">
        <BurgerArea
          ingredients={selectedIngredients}
          emptyArray={emptyArray}
          undoLast={undoLast}
        />
      </div>
    </div>
    </>
  );
}

export default App;



numbers [1, 2, 3]

...numbers

1, 2, 3, 4
