import React, { Component } from "react";
import IngredientList from "./IngredientList";
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

export default class App extends Component {
  state = {
    ingredientArray: ingredients,
    stackedBurger: []
    }
  render() {
    let ingredientComponents = this.state.ingredientArray.map((ingredient, i) => {
      return (
        <>
          <IngredientList
          ingredient={ingredient} key={`key-${i}`}
          handleIngredientClick={ () => {
              console.log(ingredient.name)
              this.setState(prevState => {
                const stackedBurgerCopy = [...prevState.stackedBurger];
                stackedBurgerCopy.push(ingredient)
                return {
                  stackedBurger: stackedBurgerCopy
                }
              }) 
        }
        }
          />
        </>
      )
    })
    return(
      <div className="appContainer">
      <div>
      <h2>Ingredients</h2>
        {ingredientComponents}
      </div>
        <div>
        <h2>Stacked Burger</h2>
      <BurgerPane
        stackedBurger={this.state.stackedBurger}
      />
        </div>
      
      </div>
    )
  }
}