import Ingredient from "./Ingredient"

export default function IngredientList({ list, onIngredientClick }) {
  const ingredientComponents = list.map((ingredient, i) => {
    return (
      <Ingredient
        key={i}
        name={ingredient.name}
        color={ingredient.color}
        onIngredientClick={onIngredientClick}
      />
    )
  })

  return (
    <div>
      <h2>Ingredients:</h2>
      {ingredientComponents}
    </div>
  )
}
