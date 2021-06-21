import React, {Component} from 'react'
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

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      clickedIngredients: []
    }
  }

  addToBurger = (e) => {
    //get value of clickedIngredient and Color
    const newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}

    //creat a new array with current clickedIngredient status and append new ingredient
    const updatedClickedIngredients = this.state.clickedIngredients.concat(newIngredient)

    //setTate with new clickedIngreddients array
    this.setState({
      clickedIngredients: updatedClickedIngredients
    })
  }

  clearBurger = (e) => {
    this.setState({
      clickedIngredients: []
    })
  }

  render() {
    return (
      <div style={{display:"flex", alignItems:"flex-end"}}>
        <IngredientList 
          ingredients={ingredients} 
          addToBurger={this.addToBurger}
        />
        <BurgerPane clickedIngredients={this.state.clickedIngredients} clearBurger={this.clearBurger} />
      </div>
    )
  }
}

export default App
