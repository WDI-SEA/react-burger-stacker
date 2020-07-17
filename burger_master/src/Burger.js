import React from 'react'

const Burger = (props) => {
  return (
    <div className="Burger">
      <ul>
        {props.ingredientsAdded.map(ingredient => (
          <li id="burgerItem" key={ingredient} style={{backgroundColor: ingredient.color}}></li>
        ))}
      </ul>
    </div>
  )
}

export default Burger;