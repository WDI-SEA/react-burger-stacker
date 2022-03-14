import Ingredient from './Ingredient'
import { useEffect } from 'react'

const IngredientsList = ({ingredients, addToStack}) => {
  let ingredientsComponents = ingredients.map((ingredient, idx) => {
    return (
      <Ingredient
        key={idx}
        ingredient={ingredient}
        addToStack={addToStack}
      />
    )
  })
  return(
    <div>

      {ingredientsComponents}
    </div>
  )
}

 
export default IngredientsList;