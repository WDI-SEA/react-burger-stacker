import React, { Component } from "react"
import BurgerPane from "./BurgerPane"
import IngredientList from "./IngredientList"

class App extends Component {
  state = {
    ingredients: [
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
    ],
    ingredientsPicked: []
  }

  handleClick = (ingredientClicked) => {
    this.setState(
      {ingredientClicked}
    )
    this.setState(prevState => {
      return {
        ingredientsPicked: [prevState.ingredientClicked,...prevState.ingredientsPicked],
        ingredient: " "
      }
    })
  }

  clearButton = () => {
    this.setState(
      {ingredientsPicked: []}
    )
  }

  render() {
    return (
      <div style={{
        textAlign: "center"
      }}>
        <h1>BURGER STACKER! 🍔</h1>
        <div id="App"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            }}>
              <IngredientList
              ingredients={this.state.ingredients}
              ingredientButton = {this.handleClick}

              />
              
              <BurgerPane
              allIngredients={this.state.ingredients}
              ingredients={this.state.ingredientsPicked}
              clearButton={this.clearButton}
              />
            {console.log(this.state.ingredientsPicked)}
        </div>
      </div>
    )
  }
}

export default App