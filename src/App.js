import React, { Component } from 'react'
import IngredientList from './components/ingredientList'
import BurgerBox from './components/BurgerBox'

const ingredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'red' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'palevioletred' },
  { name: 'American Cheese', color: 'yellow' },
  { name: 'Swiss Cheese', color: 'beige' },
  { name: 'Cheddar Cheese', color: 'gold' }
]

export default class App extends Component {
  state = {
    burg: []
  }

  handleClick = (e) => {
    const filteredIngredient = ingredients.filter(ingredient => {
      return ingredient.name === e.target.value
    })
    this.setState((prevState) => {
      const burg = [...prevState.burg]
      burg.unshift(filteredIngredient[0])
      return { burg: burg }
    })
  }

  handleClear = () => {
    this.setState({ burg: [] })
  }

  render() {
    return (
      <>

        <h1>Welcome To the Joint</h1>
        <div className='grid'>
          <IngredientList
            list={ingredients}
            onIngredientClick={this.handleClick}
          />
          <BurgerBox
            burg={this.state.burg}
            onClearClick={this.handleClear}
          />
        </div>
      </>
    )
  }
}
