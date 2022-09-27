import React, { Component } from 'react'
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
    // array of ingredients that user has clicked on
    clickedIngredients: []
  }
  // click event handler -- when an ingredient is clicked, it will add that ingredient to that array in state of clicked ingredients
  handleIngredientClick = ingredient => {
    console.log('was clicked')
    // could solve it using 
    // console.log(e.target.innerText)
    console.log(ingredient)
    this.setState(prevState => {
      //add the clicked ingredeitn to a new array with the old state's array spread into it
      const clickedIngredients = [ingredient, ...prevState.clickedIngredients]
      // merge the new array into state
      return {
        clickedIngredients
      }
    })
  }
  // clear buton click handler, which will empty the array in state
  handleBurgerClear = () => {
    this.setState(
      {
        clickedIngredients: []
      }
    )
  }

  handleClick = (e) => {
    const clickedIngredient = e.target.value

    this.setState(prevState => {
      let burger = prevState.burger.push(clickedIngredient)
      return {
        burger
      }
    })
  }

  // const burger = supplies.
  render() {
    return (
      <div style={{ display: 'flex', margin: '3rem', alignItems: 'flex-end' }}>
        {/* will receive ingredients as props and render them, and an event handler to handle ingredient clicks */}
        <IngredientList 
          ingredients={ingredients}
          handleIngredientClick={this.handleIngredientClick}
        />

        {/* will receive the clear button event handler and the clicked ingredients from state */}
        <BurgerPane 
          clickedIngredients={this.state.clickedIngredients}
          handleBurgerClear={this.handleBurgerClear}
        />
      </div>
    )
  }
}