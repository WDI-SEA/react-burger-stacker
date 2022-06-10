import React, { Component } from 'react'
import BurgerPane from './components/BurgerPane'
import IngredientList from './components/IngredientList'



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
    burgerIngredients: []
  }

  handleClick = e => {
    const filteredIngredients = ingredients.filter(ingredient => {
      return ingredient.name === e.target.value
    })
    this.setState((previousState) => {
      const burgerIngredients = [...previousState.burgerIngredients]
      burgerIngredients.unshift(filteredIngredients[0])
      return  {burgerIngredients: burgerIngredients}
    })
  }
  clear = () => {
    this.setState({burgerIngredients: []})
  }
  render() {
    return(
      <>
        <div>
          <IngredientList
        list={ingredients}
          onClick={this.handleClick}
          />
          <BurgerPane
            burgerIngredients={this.state.burgerIngredients}
            onClick={this.clear}
          />
        </div>
      </>
    )
  }
}
