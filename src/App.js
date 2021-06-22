import React, {Component} from 'react'
import IngredientList from './IngredientList'
import BurgerHome from './BurgerHome'

const burgerIngredients = [
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
  //the joe notes
  constructor(props) {
    super(props);

    

    this.clearBurger = this.clearBurger.bind(this);
  }

  state = {
    addedIngredients: []
  }
  
  addToBurger = (e) => {
    const newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
    //let updatedAddedIngredients = this.state.addedIngredients.concat(newIngredient)
    const updatedAddedIngredients = [...this.state.addedIngredients, newIngredient]
    this.setState({
      addedIngredients: updatedAddedIngredients
    })
  }

  // clearBurger = (e) => {
  //   this.setState({
  //     addedIngredients: []
  //   })
  // }

  clearBurger() {
    this.setState({
      addedIngredients: []
    })
  }
  //goals:
  //get val of clicked ingredient and color
  //create a new array with curent clicked ingredients and append new ingredient
  //set state with new clicked ingredient array
  //make new empty array on burger home
  //the method will add a new ingredient to that array on click
  //we will use concat to sidestep the mutation situation


  render() {
    return(
      <div style={{display: "flex", alignItems:"flex-end"}}>
      <h1><IngredientList ingredients={burgerIngredients} addToBurger={this.addToBurger}/></h1>
      <h1><BurgerHome addedIngredients={this.state.addedIngredients} clearBurger={this.clearBurger} /></h1>
      </div>
    )
  }
}
