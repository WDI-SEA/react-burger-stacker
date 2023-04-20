import { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from "./BurgerPane"



const ingredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
];

export default class App extends Component {
  state = {
    stack: [],
    ingredientsList: [...ingredients],
    input: ""
  }

  handleAddIngredient= (e) => {
      const newStackIngredient = {
        name: e.target.innerText,
        color: e.target.style.backgroundColor
      }
      console.log("new stack", newStackIngredient)
      this.setState(prevState => {
        const stack =[...prevState.stack, newStackIngredient]
        return {stack}
      })
  
   }
  
  handleClearStack = () => {
    this.setState({
      stack:[]
    })
  } 
  
  handleRemoveOne = () => {
    let index = this.state.stack.length - 1
    console.log("remove =>", this.state.stack[index])
    this.setState({
      stack: this.state.stack.filter((item, i) => {
        return i !== index
      })
    })
  }
  handleAddOne = (e) => {
    e.preventDefault()
    const ingredientToAdd = {
      name: e.target[0].value,
      color: "#FFFFF"
    }
    console.log("new =>", ingredientToAdd)
    this.setState({
      ingredientsList: [...this.state.ingredientsList, ingredientToAdd],
      input: ""
    })
  }
  handleChange = (e) => {
    this.setState({
        input: e.target.value
      })
    }
  

  render() {
    return (
      <div>
        <h1>Burger Builder</h1>
        <IngredientList
          items={this.state.ingredientsList}
          handleAddIngredient={this.handleAddIngredient}
          handleAddOne={this.handleAddOne}
          input={this.state.input}
          handleChange={this.handleChange}
        />
        <BurgerPane
          stack={this.state.stack}
          handleClearStack={this.handleClearStack}
          handleRemoveOne={this.handleRemoveOne}
        /> 
        
      </div>
      
    )
  }
}