import React, {Component} from "react";
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

let ingredients = [
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

export default class App extends Component{
  state={
    clickedIngredients: []
  }
  handleIngredientClick = (ingredient) =>{
    console.log(ingredient.name)
    this.setState(prevState =>{
      const clickedIngredients = [ingredient, ...prevState.clickedIngredients]

      return {
        clickedIngredients
      }
    })
  }

  handleBurgerClear = ()=>{
    this.setState({
      clickedIngredients: []
    })
  }

  render(){
    return(
      <div  style={{display: 'flex', margin: '3rem', alignItems: "flex-end"}} >

        <IngredientList 
          ingredients={ingredients} 
          handleIngredientClick={this.handleIngredientClick}
        />

        <BurgerPane  
          clickedIngredients={this.state.clickedIngredients}
          handleBurgerClear={this.handleBurgerClear}
        />
      </div>
    )
  }
}