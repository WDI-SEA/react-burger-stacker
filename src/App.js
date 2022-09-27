import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
import styles from './App.css'

export default class App extends Component {


  state = {
    burgerStack: [],
    ingredients: [
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
  }

  
  addIngredient = (e) => {
    console.log(this.state.burgerStack)
    console.log(e.target.innerText)
    this.setState(prevState => {
      return {
        burgerStack: [e.target.innerText, ...prevState.burgerStack]
        
      }
      
    })
      
  
    console.log(`Added`)
}   

  clearBorger = (e) => {
    this.setState({
      burgerStack: []
    })
    console.log(`Borger Deletus`)
  }
  

  
  render() {
    return (
      <div>
        <h2>Burger Stacker!</h2>
        <div className='main'>
          
          
          <div className='ingredient-list'>
            <h2>Borger DNA</h2>
            <IngredientList
              addIngredient={this.addIngredient}
              ingredients={this.state.ingredients}
              burgerStack={this.state.burgerStack}
            />
          </div>

          <div className='burger-pane'>
            <h2>Crafted Borger</h2>
            <BurgerPane
              clearBorger={this.clearBorger}
              burgerStack={this.state.burgerStack}
              ingredients={this.state.ingredients}
            />
          </div>


      </div>

      </div>
    )
  }
}
