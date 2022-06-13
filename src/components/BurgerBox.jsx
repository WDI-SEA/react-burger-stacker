import React, { Component } from "react"
import Burger from "./Burger"

export default function BurgerBox({ burgerIngredients, onClearClick }) {
  return (
    <div>
      <h2>Eat Up!</h2>
      <Burger burgerIngredients={burgerIngredients} />
      <button onClick={onClearClick}>Clear</button>
    </div>
  )
}
