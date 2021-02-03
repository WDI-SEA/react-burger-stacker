import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';

class App extends Component {
  state = {
    burgerIngredients: [],
    ingredients: [
      { name: 'Kaiser Bun', color: 'saddlebrown' },
      { name: 'Sesame Bun', color: 'sandybrown' },
      { name: 'Gluten Free Bun', color: 'peru' },
      { name: 'Lettuce Wrap', color: 'olivedrab' },
      { name: 'Beef Patty', color: '#3F250B' },
      { name: 'Soy Patty', color: '#3F250B' },
      { name: 'Tide Pod', color: '#3336FF' },
      { name: 'Black Bean Patty', color: '#3F250B' },
      { name: 'Chicken Patty', color: 'burlywood' },
      { name: 'Lettuce', color: 'lawngreen' },
      { name: 'Tomato', color: 'tomato' },
      { name: 'Bacon', color: 'maroon' },
      { name: 'Onion', color: 'lightyellow' }
    ]
  }

  addItem = (e) => {
    e.preventDefault()
    console.log(e.target);
    //let tempArray = this.state.burgerIngredients
    // tempArray.unshift({ name: e.target.innerText, color: e.target.style.backgroundColor });
    // this.setState({
    //   burgerIngredients: tempArray
    // })
    this.setState({
      burgerIngredients: [{name: e.target.innerText, color: e.target.style.backgroundColor}, ...this.state.burgerIngredients]
    })
    // console.log(this.state.burgerIngredients);
  }


  clearBurger = () => {
    console.log("Clearing Ingredients")
    this.setState({
      burgerIngredients: [],
      tempArray: []
    })
  }

  render() {
    return (
      <div id="burgerstacker">
        <div>
          <IngredientList ingredients={this.state.ingredients} addItem={this.addItem} />
        </div>
        <div>
          <BurgerPane burgerIngredients={this.state.burgerIngredients} clearBurger={this.clearBurger} />
        </div>
      </div>
    )
  }
}

export default App;
