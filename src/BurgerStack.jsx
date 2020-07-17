import React from 'react';
import BurgerIngredient from './BurgerIngredient';

export default function BurgerStack(props){
  console.log('burger', props);
  const ingredients = props.burgerIngredients.map((ingredient, index) => {
    return <BurgerIngredient ingredient={ ingredient } index={ index } />
  })
  return (
    <div>
      <h1>Burger Stack</h1>
      { ingredients }
    </div>
  )
}