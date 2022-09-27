import React, {Component} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

export default class App extends Component {
  state= {
    ingredientsArray: [
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
      ],
      burgerIngredientsArray:[],
      ingredient: ""
}
  addIngredient = (e) => {
    console.log(this.state.burgerIngredientsArray)
    this.setState({
      ingredient:e.target.value
    })
    this.setState(prevState => {
      return {
        burgerIngredientsArray: [...prevState.burgerIngredientsArray, prevState.ingredient],
        ingredient: ''
      }
    })

  }
  render(){
    return(
      <div className="center">
        <h1>Burger Stacker Application</h1>
        <container className="App">
          <IngredientList 
          ingredientsArray={this.state.ingredientsArray}
          addIngredient={this.addIngredient}/>
          <BurgerPane 
          burgerIngredientsArray={this.state.burgerIngredientsArray}/>
        </container>

      </div>
    )
  }
}