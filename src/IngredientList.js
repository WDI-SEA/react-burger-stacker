import React, { Component } from "react"
import BurgerStack from "./BurgerStack"
import Ingredients from "./Ingredients"
import BurgerPane from "./BurgerPane";

const ingredients = [
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
  const ingredientsPicked = []

class IngredientList extends Component {
    state = {
        ingredients: ingredients,
        ingredientClicked: "",
        
     }

    handleClick = (ingredientClicked) => {
       
        ingredientsPicked.push(ingredientClicked)
        console.log(ingredientsPicked)
        this.setState(
            {ingredientClicked}
        )
    }
    render() {
        const allIngredients = ingredients.map((ingredient, i) => {
            return (
                <Ingredients
                key={`ingredient${i}`}
                ingredients={ingredient}
                onClick = { () => this.handleClick(`${ingredient.name}`)}
                />
            )
        })
        return(
            <div id="IngredientList">
                <BurgerStack
                ingredientsPicked = {ingredientsPicked}
                ingredients={ingredients}
                />
                <BurgerPane
                ingredientsPicked = {ingredientsPicked}
                ingredients={ingredients}
                />
                
                {allIngredients}
            </div>
        )
    }
}

export default IngredientList