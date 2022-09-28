import React, { Component } from "react"
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

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
  // have state that keeps track of clicked ingredients in an array
  state = {
    clickedIngredients: []
  }

  // click even handler --  when an ingredient is clicked it will add that ingredient to the array
  handleIngredientClick = ingredient => {
    // console.log(ingredient)
    // console.log(e.target.innerText)
    this.setState(prevState => {
      const clickedIngredients = [ingredient, ...prevState.clickedIngredients]
        return {
          clickedIngredients
        }
    })
  }

  handleBurgerClear = () => {
    this.setState({
      clickedIngredients: []
    })
  }

  // clear button click handler -- which will empty the array in state
  render () {
    return (
      <div style={{ display: 'flex', margin: '3rem', alignItems: 'flex-end'}} className="burger-container">
        {/* Will receive ingredients as props and render them, and an event handler to handel event clicks */}
        <IngredientList 
          ingredients={ingredients}
          handleIngredientClick={this.handleIngredientClick}
        />

        {/* will receive the clear button event handler, and the clicked ingredients from state to render */}
        <BurgerPane 
          clickedIngredients={this.state.clickedIngredients}
          handleBurgerClear={this.handleBurgerClear}
        />
      </div>
    )
  }
}
