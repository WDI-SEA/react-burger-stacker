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
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }
  
  render() {
    return(
      <div>
        <IngredientList incrementCounter={() => this.setState({ counter: this.state.counter + 1 })} ingredients={burgerIngredients} />
        <BurgerHome ingredients={burgerIngredients} counter={this.state.counter}/>
        This is where everyone will live in peace and harmony
       
      </div>
    )
  }
}
