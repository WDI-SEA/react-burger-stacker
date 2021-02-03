import React, { Component } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

class App extends Component {
  state = {
    burgerIngredients: [], 
    ingredients: [
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Tide Pod', color: '#3336FF'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ]
}

clearBurger = () =>{
    console.log("Clearing Ingredients")
    this.setState({
        burgerIngredients: [],
    })
}

addItem = (e) =>{
  e.preventDefault()
  this.setState({
    burgerIngredients: this.state.burgerIngredients.unshift({name: e.target.innerText, color: e.target.style.backgroundColor})
  })
  console.log(this.state.burgerIngredients);
}


  render() {
    return (
    <div id="burgerstacker">
      <div>
        <IngredientList ingredients={this.state.ingredients} addItem={this.addItem}/>
      </div>
      <div>
        <BurgerPane clearBurger={this.clearBurger} burgerIngredients={this.state.burgerIngredients} />
        {/* {console.log(this.state.burgerIngredients)} */}
      </div>
    </div>
    )
  }
}

export default App;
