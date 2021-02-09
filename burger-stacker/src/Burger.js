import React, { useState } from 'react';
import Ingredients from './Ingredients';
import BurgerStack from './BurgerStack';

export default function Burger() {

  const ingredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' }
  ]

  const [burger, setBurger] = useState([])

  const addIngredient = (ingredient) => {
    let burgerCopy = burger
    let newObject = ingredient
    burgerCopy.push(newObject)
    setBurger(burgerCopy)
    console.log(burger)

  }

  return (
    <>
      <ul>
        {ingredients.map((ingredient, index) => {
          return (
            <button key={index} onClick={() => addIngredient(ingredient)}>
              <Ingredients ingredient={ingredient} key={index} />
            </button>

          )
        })}
      </ul>

      <div>
        <button onClick={() => setBurger([])}>Clear Burger</button>
            <BurgerStack burger={burger} />
      </div>
    </>
  )
}
