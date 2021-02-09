import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';

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
    console.log(e.target.value)
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
      <div>
      <h1>Burger Stacker</h1>
    <main className='panes'>
      <IngredientList ingredients={this.state.ingredients} />
      <BurgerPane burgerBits={this.state.burgerBits} />
    </main>
      </div>
    )

  }
}

export default App;
