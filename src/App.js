import React, { Component } from "react"
import BurgerPane from "./BurgerPane"
import IngredientList from "./IngredientList"

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
      {name: 'Onion', color: 'lightyellow'},
      {name: 'Cheese', color: 'yellow' }
    ]
export default class App extends Component {
  // have state that keeps track of clicked ingredients in an array
  state = {
    clickedIngredients: []
  }
  //click event handler -- when an ingredient is clicked, it will add ingredient to that array in state of clicked ingredients
  handleIngredientClick = ingredient => {
    console.log(ingredient)
    this.setState(prevState => {
          const clickedIngredients = [ingredient, ...prevState.clickedIngredients]
          return {
            clickedIngredients
          }
    })
  }
  // clear button handler which will empty the array in state
  handleBurgerClear = () => {
    this.setState({
      clickedIngredients: []
    })
  }
  render () {
    return(
      <div style = {{
        display: 'flex',
        margin: '3rem',
        alignItems: 'flex-end'
        }}>
          {/* Will recieve ingredients as a prop and render them, and an event handler to handle ingredient clicks */}
      <IngredientList ingredients = {ingredients}
        handleIngredientClick = {this.handleIngredientClick}
      
      />
        
        {/* clear button and clicked ingredients to render */}
      <BurgerPane 
        clickedIngredients = {this.state.clickedIngredients}
        handleBurgerClear = {this.handleBurgerClear}
      />
      </div>
    )
  }
 
}

