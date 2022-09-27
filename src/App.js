import React, { Component } from 'react';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';
import './App.css';

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
    ingredients: ingredients,
    addedToBurger: []
  }

  add = (i) => {
    let index = Number.parseInt(i)
    this.setState((prevState) => {
      return (
        {
          ingredients: prevState.ingredients,
          addedToBurger: [...prevState.addedToBurger,prevState.ingredients[i]]
        }
      )
    })
  }
  undo = () => {
    this.state.addedToBurger.pop()
    this.setState({
        addedToBurger: this.state.addedToBurger
    })
  }
  clear = () => {
    this.setState({
      addedToBurger: []
    })
  }
  newIngredient = (e) => {
    this.setState((prevState) => {
      return (
        {
          ingredients:[...prevState.ingredients,{name: e.target.value,color: "maroon"}],
          addedToBurger: prevState.addedToBurger
        }
      )
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='ingredient-list'>
            <IngredientList ingredients={this.state.ingredients} add={this.add}/>
            <form>
              <label>Add a new ingredient:</label>
              <input />
              <button onClick={this.newIngredient}>Submit</button>
            </form>
        </div>

        <div className='burger-pane'>
            <BurgerPane ingredients={this.state.addedToBurger} undo={this.undo} clear={this.clear}/>
        </div>
      </div>

    )
  }
}
