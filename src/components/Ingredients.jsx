import React, {useState} from 'react'

const Ingredients = (props) => {
    const [isAdded, setAdded] = useState([])

    const handleAddClick = (i) => {
        console.log('clicked' + i.name)
    }
  const ingredientList =  props.ingredients.map((ingredient, key) => { 
      console.log(ingredient)
      return (<li key={key}>{ingredient.name}<button onClick={() => handleAddClick(ingredientList)}>Add Item</button></li>)})
        return (
            <div className="menu">
               <h1>Build-A-Burger</h1>
                <ul class="ingredients">
                {ingredientList}
                </ul>
            </div>
        )}

    

export default Ingredients;