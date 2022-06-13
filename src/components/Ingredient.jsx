export default function Ingredient({ name, color, onIngredientClick }) {
  return (
    <>
      <button
        onClick={onIngredientClick}
        value={name}
        style={{ backgroundColor: `${color}` }}
      >
        {name}
      </button>
    </>
  )
}
