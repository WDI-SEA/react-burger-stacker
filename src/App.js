
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import { render } from '@testing-library/react';
import { Component } from 'react';


class App extends Component {
  state={
    ingredientArray: [
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
    burgerBits:[]
    
  }

  addToStack = (e)=>{
    console.log(e.target.innerText)
    console.log(e.target.style.backgroundColor);
    let name=e.target.innerText;
    let color=e.target.style.backgroundColor;
    let tempArray=this.state.burgerBits;
    tempArray.unshift({name, color});
    this.setState({
      burgerBits: tempArray
    })
  }

  clearBurger=()=>{
    console.log('Clear')
    this.setState({burgerBits: [] })
  }

  render() {
    return (
      <div className="App">
        <IngredientList ingredientArray={this.state.ingredientArray} add={this.addToStack}/>
        <BurgerPane ingredientArray={this.state.burgerBits} clearBurger={this.clearBurger}/>
      </div>
    );
  }
}

export default App;
