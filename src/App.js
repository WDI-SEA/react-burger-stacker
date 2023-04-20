import React, {Component} from "react"
import Burger from "./Burger"
import Ingredients from "./Ingredients"

export default class App extends Component {

  state = {
    specialBurger: []
  }

  handleClear = () => {
    this.setState({specialBurger: []})
  }

  handleIngredientClick = (ingredient) => {
    this.setState({
        specialBurger: [...this.state.specialBurger, ingredient]
      })
  }

  render() {
    return (
        <div className="container">
          <Ingredients onIngredientClick={this.handleIngredientClick} />
          <Burger items={this.state.specialBurger} />
          <button onClick={this.handleClear} className="clear">Clear</button>
      </div>
    )
  }
} 