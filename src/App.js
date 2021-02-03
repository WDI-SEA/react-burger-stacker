import React, { Component } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPlate from './BurgerPlate';

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Tide Pod', color: '#3336FF'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]



class App extends Component {
  constructor(props){
    super()
    this.state = {
      //add in state variables
      burger: []
    }
  }

  addIngredient = (e) =>{
    //adds a burger item
    let tempBurger = this.state.burger
    tempBurger.splice(0, 0, e.target.value)

    this.setState({
      burger: tempBurger
    })
  }

  // updateIngredient = (e) => {
  //   // from on click grab the newIngredient 
  //   e.preventDefault()
  //   this.setState({newIngredient: `${e.target.value}`})
  //   console.log(e.target.value)
  //   this.addIngredient(e)
  // }

  clearIngredients = (e) => {
    e.preventDefault()
    this.setState({
      burger: []
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Burger Stacker</h1>
        <div id="ingredientArea">
          <IngredientList ingredients={ingredients} updateIngredient={this.addIngredient} />

        </div>
        <div id="burgerArea">
          <BurgerPlate burger={this.state.burger} clearIngredients={this.clearIngredients} /> 
        </div>
      </div>
    )

  }
}

export default App;
