import React, { useState } from "react"
import IngredientList from "./components/IngredientList"
import BurgerBox from "./components/BurgerBox"

const ingredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "red" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "palevioletred" },
  { name: "American Cheese", color: "yellow" },
  { name: "Swiss Cheese", color: "beige" },
  { name: "Cheddar Cheese", color: "gold" },
]

export default function App() {
  const [burger, setBurger] = useState([])

  const handleAddToBurger = (e) => {
    const filteredIngredients = ingredients.filter(
      (ingredient) => ingredient.name === e.target.value
    )
    setBurger([filteredIngredients[0], ...burger])
  }

  const handleClearBurger = () => setBurger([])

  return (
    <>
      <h1>Welcome To the BBQ</h1>
      <div className="grid">
        <IngredientList
          list={ingredients}
          onIngredientClick={handleAddToBurger}
        />
        <BurgerBox
          burgerIngredients={burger}
          onClearClick={handleClearBurger}
        />
      </div>
    </>
  )
}
