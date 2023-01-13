import "./App.css"
import {Component} from 'react';
import IngredientList from './IngredientList'
import BurgerPane from "./BurgerPane";

const ingredientsArr = [
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
    stack: [],
    ingredientList: [...ingredientsArr]
  }

  handleAddIngred = e => {
    console.log('add this ingredient next', e.target.innerText)
    const newStateIngred = {
      name: e.target.innerText,
      color: e.target.style.backgroundColor
    }

    this.setState(prevState => {
      const stack = [...prevState.stack, newStateIngred]
      return {stack}
    })
  }

  handleClearStack = e => {
    console.log('remove from stack', this.state.stack)
    this.setState({
      stack: []
    })
  }

  render () {
    return (
      <>
        <h1>Burger Stacker</h1>
        <IngredientList
          ingreds={this.state.ingredientList} 
          handleAddIngred={this.handleAddIngred}
        />
        <BurgerPane
          stack={this.state.stack}
          handleClearStack={this.handleClearStack}
        />
      </>
    )
  }
}