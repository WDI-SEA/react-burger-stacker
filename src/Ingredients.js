import React from 'react'

export default function Ingredients(props) {
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
  const availableIngredients = ingredients.map((ingredient, i) => {
    return (
        <div key={i}>
        <li style={{background: ingredient.color }}>{ingredient.name}</li>
        <button type="submit"
             onClick={() => props.addToBurger(ingredient.name)}>
            Add {ingredient.name} </button>
        </div>
    ) 
})
return (
    <> 
    <h5>Here are the Ingredients</h5>
    {availableIngredients}
    </>
)
}