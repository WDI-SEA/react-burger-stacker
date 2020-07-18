import React, {useState,useLayoutEffect} from 'react';
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
import { render } from '@testing-library/react';

function App() {
    let ingredients = [
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

    const initialState = ["Plate"]
    const [toppins,setToppins] = useState(initialState)

    function addToStack(e) {
        setToppins([e, ...toppins])
        console.log(e)
    }
    
    function clearClick(e) {
        setToppins(initialState)
        console.log(e)
    }

    // useLayoutEffect (() => {
    //     console.log(toppins)
    // },
    // [toppins])

            return (
              <div className="App">
                  <IngredientList ingredients={ingredients} action={addToStack} />
                  
                  <BurgerPane toppins={toppins} action={clearClick} />
              </div>
        )
}

// action={clearClick()}  //TOO MANY RERENDERS?

export default App;