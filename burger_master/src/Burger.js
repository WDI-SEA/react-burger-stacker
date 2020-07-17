import React from 'react'

const Burger = (props) => {
  return (
    <div id="burger">
      <ul>
        {props.ingredientsList.map(ingredient => (
          <li id="burgerItem" key={ingredient} style={{backgroundColor: ingredient.color}}></li>
        ))}
      </ul>
    </div>
  )
}

export default Burger;