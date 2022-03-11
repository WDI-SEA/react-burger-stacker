import React, { Component } from 'react';
import "./App.css"
import IngredientsList from './components/IngredientsList';
import BurgerPane from './components/BurgerPane';

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
 } 

 addToStack = (ing) => {
  let burgerArrayCopy = [...this.state.burgerPaneIngredients]
  burgerArrayCopy.unshift(ing)
  this.setState({
    burgerPaneIngredients: burgerArrayCopy
  },() => console.log(this.state.burgerPaneIngredients))
 }

  render() { 
    return (
      <div className='App App-header'>
        <IngredientsList ingredients={this.state.ingredients} addToStack={this.addToStack} />
        <BurgerPane burgerPaneIngredients={this.state.burgerPaneIngredients} />
      </div>
    );
  }
}
 
export default App;