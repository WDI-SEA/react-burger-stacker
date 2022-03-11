import React, { Component } from 'react';
import "./App.css"
import IngredientsList from './components/IngredientsList';
import BurgerPane from './components/BurgerPane';
import NewIngredientForm from './components/NewIngredient.jsx';

class App extends Component {
// put the state here.
state = { 
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
   ],
   burgerPaneIngredients: [],
   isStacked: false
 } 

 addToStack = (ing) => {
  let burgerArrayCopy = [...this.state.burgerPaneIngredients]
  burgerArrayCopy.unshift(ing)
  this.setState({
    burgerPaneIngredients: burgerArrayCopy,
    isStacked: true
  },() => console.log(this.state.burgerPaneIngredients))
 }

 undoStack = () => {
   let burgerArrayCopy = [...this.state.burgerPaneIngredients]
   burgerArrayCopy.shift()
   this.setState({
     burgerPaneIngredients: burgerArrayCopy 
   })
 }

 clearBurger = () => {
   this.setState({
     burgerPaneIngredients: [],
     isStacked: false
   })
 }

 addNewIngredient = (ing) => {
   let ingredientsCopy = [...this.state.ingredients]
   ingredientsCopy.push(ing)
  this.setState({
    ingredients: ingredientsCopy
  })
 }

  render() { 
    return (
      <div>
        <div className="main-container">
          <NewIngredientForm
            addNewIngredient={this.addNewIngredient}
          />
        </div>
        <div className='App App-header'>
          <IngredientsList 
            ingredients={this.state.ingredients} 
            addToStack={this.addToStack} 
            isStacked={this.state.isStacked}
          />
          <BurgerPane 
            burgerPaneIngredients={this.state.burgerPaneIngredients} 
            isStacked={this.state.isStacked} 
            clearBurger={this.clearBurger}
            undoStack={this.undoStack}
          />
          
        </div>
      </div>
    );
  }
}
 
export default App;