import React, { Component } from 'react'
import './App.css';
import Ingredients from './Ingredients'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


const ingredients = 
[
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

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
        burger: [],
        newIngredient:''
    }
    this.addIngredient=this.addIngredient.bind(this)
}

addIngredient(newIng){
  let temp = this.state.burger
  console.log(this.state)
  temp.push(newIng)
  this.setState({burger: temp})
}
  render() {
    return (
      <div className="App">
        <div>
          {ingredients.map((ingredient) => (
            <IngredientList ingredient={ingredient} addIngredient={this.addIngredient} />
          ))}
        </div>
        <div>
          <BurgerPane burger={this.state.burger} />
        </div>
      </div>
    );
  }
}
export default App;
