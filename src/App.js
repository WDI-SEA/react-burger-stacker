import {useState} from 'react'
import IngredientList from './IngredientList'

import Burgers from './Burgers'

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

function App (props) {
  // have state that keeps track of clicked ingredients in an array
    // array of ingredients that the user has clicked on
  const [clickedIngredients, setClickedIngredients] = useState([])

  

  // click even handler -- when an ingredient is click, it will add that ingredient to that array in state of clicked ingredients
  const setIngredients = ingredient => {
    // console.log(e.target.innerText)
    setClickedIngredients([ingredient, ...clickedIngredients])

    return {
      clickedIngredients
    }
      
  }
  

  // clear button click handler, which will empty the array in state
  let handleBurgerClear = () => {
      setClickedIngredients([])
    
  }

    return (
      <div class='app-layout'>
        {/* will recieve ingredients a props and render them, and a event handler to handle ingredient clicks */}
        <IngredientList 
          ingredients={ingredients}
          setIngredients={setIngredients}
        />

        {/* will recive the clear button event handler, and the clicked ingredients from state to render */}
        <Burgers
          clickedIngredients={clickedIngredients}
          handleBurgerClear={handleBurgerClear}
        />
      </div>
    )
}


export default App;