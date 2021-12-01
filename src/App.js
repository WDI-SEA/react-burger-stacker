import { Component } from 'react';
import './App.css';
import BurgerStack from './BurgerStack';
import IngredientList from './IngredientList';



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
  state ={
    burgerArray: []

}


addIngredient = (e, i) => {
    e.preventDefault()
    let currrentArray = this.state.burgerArray
    currrentArray.push(e.target.name)
    console.log(e)
    this.setState({
      burgerArray: currrentArray
    })
    console.log(this.state.burgerArray)
    
    return <BurgerStack />
    
  }

  render(){
    return(
      
      <div>
        
          <IngredientList ingredients={ingredients} onClick={this.addIngredient}/>

          <BurgerStack  ingredients={this.state.burgerArray}/>
        
      </div>
    )
  }
}
