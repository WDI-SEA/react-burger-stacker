import React,{Component} from "react"
import IngredientList from "./IngredientList"
import BurgerPane from "./BurgerPane"
import './App.css'
const starterIngredients=[
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
    ingredients:[]
  }
  clear = e =>{
    console.log('clear')
    this.setState({
      ingredients:[]
    })
  }
  handleClick = (ingredient) =>{
    console.log(ingredient)
    this.setState(prevState=>{
      const ingredients = [ingredient, ...prevState.ingredients]
      return{
        ingredients
      }
})
  }
  render(){
    return(
      <>
        <IngredientList handleClick={this.handleClick} ingredients={starterIngredients}/>
        <BurgerPane clear={this.clear} ingredients={this.state.ingredients}/>
      </>
    )
  }
}