import React, {useState} from 'react';
import './App.css';
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";

const ingredients = [
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

    const [burgerIngredients, setBurgerIngredients] = useState([])

    let addIngredient = (e) => {
      let newBurgerIngredients = [e.target.value];
      let finalBurger = newBurgerIngredients.concat(burgerIngredients)
      setBurgerIngredients(finalBurger)
      console.log(`burgerIngredients from app.js ${burgerIngredients}`);
    }

  const clearStack = (e) => {
    setBurgerIngredients([])
  }

    return (
      <div className={'display'}>
        <IngredientList ingredients={ingredients}
                        onClick={addIngredient} />
        <BurgerPane ingredients={burgerIngredients}
                    action={clearStack} />
      </div>
    );
}

export default App;
