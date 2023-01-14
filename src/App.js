import React, {Component} from 'react'
import IngredientList from './IngredientList' 
import BurgerPane from './BurgerPane' 

const ingredientsList = [
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
    burger: [...ingredientsList]
  }

  handleAddToStack = e => {
    // console.log("add to stack", e.target.innerText)
    const newIngredient = {
      name: e.target.innerText,
      color: e.target.style.backgroundColor
    }
    this.setState(prevState => {
      const stack = [...prevState.stack, newIngredient]
      return {stack}
    })
  }

  handleClearStack = e => {
    // console.log("remove from stack", this.state.stack)
    this.setState({
      stack: []
    })
  }

  render(){

    return(
        <div className="container"  >
            <div className="ingredientList"  >
              <IngredientList
                  items={this.state.burger}
                  handleAddToStack={this.handleAddToStack}
              />
            </div>
            <div className="newList">
              <BurgerPane
                  stack={this.state.stack}
                  handleClearStack={this.handleClearStack}
              />
            </div>
            
        </div>
      )
  }
}
