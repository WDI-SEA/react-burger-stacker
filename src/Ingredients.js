import React from 'react'

const Ingredients = () => {
//starter data
let ingredients =  [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]
  const availableIngredients = ingredients.map(ingredient => {
    return (
        <>
        <li style={{background: ingredient.color, }}>{ingredient.name}</li>
        <button type="submit">Add Ingredients</button><br /><br />
        </>
    ) 
})

return (
    <> 
    <h5>Here are the Ingredients</h5>
    {availableIngredients}
    </>
)
} 
export default Ingredients