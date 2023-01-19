import React from 'react'
import IngredientsList from './IngredientsList'
import BurgerPane from './BurgerPane'


const ingredientsArray = [
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
export default class App extends React.Component {
  state = {
    stack: [],
    IngredientsList: [...ingredientsArray]
  }
  handleAddStack = (e) => {
    console.log("add to stack", e.target.innerText, e.target.style.backgroundColor)
		const newStateIngredient = {
			name: e.target.innerText,
			color: e.target.style.backgroundColor
		}
		this.setState(prevState => {
			const stack = [...prevState.stack, newStateIngredient]
			return {stack}
		})
	}
//function to add ingredients to the stack
  // addIngredient = (index) => {
  //   const newStack = [...this.state.stack]
  //   newStack.push(this.state.IngredientsList[index])
  //   this.setState({
  //     stack: newStack
  //   })
  // }
//function to remove ingredients from the stack
  // removeIngredient = (index) => {
  //   const newStack = [...this.state.stack]
  //   newStack.splice(index, 1)
  //   this.setState({
  //     stack: newStack
  //   })
  // }
//function to clear the stack
  // clearStack = () => {
  //   this.setState({
  //     stack: []
  //   })
  // }


  render(){
    
    return(
      <div className="burger">
        <h1>Burger Stacker</h1>
       
        <IngredientsList 
        items={this.state.IngredientsList}
        
        />
        <BurgerPane 
        stack={this.state.stack}
        
        />
      </div>
    )
  }

}