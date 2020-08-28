import React, {useState} from "react";
import "./style.css";
import BurgerPane from "./BurgerPane";
import IngredientList from "./IngredientList";

//import components
let ingredientSeed = [
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

function App(props) {
  let [ingredients, setIngredients] = useState(ingredientSeed);
  let [stack, setStack] = useState([]);

  //declare some functions
  function stackBurger(e) {
    let ingToAdd = ingredients.filter(ing => ing.name === e.target.innerText);
    setStack([ingToAdd[0], ...stack]); //
  }

  function clear(){
    setStack([]);
  }

  return (
    <div>
      <IngredientList ingredients={ingredients} stackburger={stackBurger}/>
      <BurgerPane stack={stack} clear={clear} />
      {/* list components */}
    </div>

  )
}

export default App