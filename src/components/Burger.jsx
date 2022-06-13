import Ingredient from "./Ingredient"

export default function Burger({ burgerIngredients, onIngredientClick }) {
  const burgerComponents = burgerIngredients.map((ingredient, idx) => {
    return (
      <Ingredient
        key={idx}
        name={ingredient.name}
        color={ingredient.color}
        onIngredientClick={onIngredientClick}
      />
    )
  })
  return <>{burgerComponents}</>
}
