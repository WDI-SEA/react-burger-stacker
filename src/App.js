import React, {useState} from 'react';
import './App.css';
import ListArea from './ListArea'
import StackArea from './StackArea'


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

function App() {

    const [burger, setBurger] = useState([])

    const addIngredient = (e, ingredient) => {
        e.preventDefault()
        setBurger([ingredient, ...burger])
    }

    const clearBurger = (e) => {
        e.preventDefault()
        setBurger([])
    }

    const undoBurger = (e) => {
        e.preventDefault()
        setBurger()
    }

    return (
        <div className="App">
            <h1>Burger Stackin' Action</h1>
            <ListArea ingredients={ingredients} onClick={addIngredient} />
            <StackArea burger={burger} onClick={clearBurger} undo={undoBurger} />
        </div>
    )
}

export default App;
