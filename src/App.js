import React, {Component} from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
import './App.css'

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
    burgerIngredients: ingredients,
    burgerArray: [],
    bottomBun: false

  }

  checkBun = () => {
    if (this.state.burgerArray.length > 0) {
      if (this.state.burgerArray[0].includes('Bun')) {
        this.state.burgerArray[0].setState({bottomBun: true})

      }
    }
  }


  handleIngredientClick = e => {
    const ingredient = this.state.burgerIngredients.find(({name}) => {
        return (name === e.target.innerText);
    });
    this.setState(prevState => {
        return {
            burgerArray: [ingredient, ...prevState.burgerArray]
        }
    });
}
  handleBurgerClear = () => {
      this.setState({burgerArray: []});
  }

  render() {
    return (
      <div className='Container'>
        <div className='CreateCol'>
          <IngredientList 
          ingredients={this.state.burgerIngredients} 
          handleIngredientClick={this.handleIngredientClick}
          />
        </div>

        <div className='DisplayCol'>
          <BurgerPane 
          burgerArray={this.state.burgerArray}
          handleBurgerClear={this.handleBurgerClear}
          checkBun={this.checkBun}
          />
        </div>
      </div>
    )
  }
}