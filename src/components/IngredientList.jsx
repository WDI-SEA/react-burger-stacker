import Ingredients from './childComponents/Ingredients'

const IngredientList = ({ ingredients, addIngredient }) => {
  const allIngredients = ingredients.map(ingredient => {
    const { name, color } = ingredient
    return (
      <div key={name} onClick={() => addIngredient(ingredient)}>
        <Ingredients name={name} color={color} />
      </div>
    )
  })
  return (
    <div className='ingredFlex'>
      <h1>Ingredients List</h1>
      {allIngredients}
    </div>
  )
}

export default IngredientList
