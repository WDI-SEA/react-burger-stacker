import { Component } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

const ingredients = [{
  buns: [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'}
  ],
  patties: [
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
  ],
  toppings: [
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]
}];


// function App() {
//   return (
//     <div className="App">
//       {ingredients.map((ingredient) => (
//         <IngredientList ingredient={ingredient} />
//       ))}
//       <BurgerPane />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      burger: [],
      newIngredient: ''
    }
  }

  addIngredient = (e) => {
    let tempOrderArray = this.state.burger
    tempOrderArray.push(this.state.newIngredient)
    this.setState({burger: tempOrderArray})
  }

  updateIngredient = (e) => {
    e.preventDefault()
    this.setState({newIngredient: `${e.target.value}`})
  }

  clearIngredient = (e) => {
    e.preventDefault()
    this.setState({
      burger: []
    })
  }

  render() {
    console.log(this.burger, "added ingredients")
    return(
      <div className="container">
        <div>
          {ingredients.map((ingredient) => (
            <IngredientList ingredient={ingredient} addIngredient={this.addIngredient} /> 
          ))}
        </div>
        <div>
          <BurgerPane burger={this.state.burger} clearIngredient={this.clearIngredient}/>
        </div>
      </div>
    )
  }
}

export default App;
