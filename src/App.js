import React, { Component } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';


class App extends Component {
  
  state = {
    burgerIngredients:[]
  }
  addToBurger = (name, color) => {
    // push new ingredient to burger using spread operator
    // this.setState((prevState, props)=>({
    //   burgerIngredients:[...prevState.burgerIngredients, {name,color}]
    // }))    

    // push ingredients by creating a new array
    let newBurgerList = this.state.burgerIngredients
    newBurgerList.unshift({name:name,color:color})  // to add item to the fron of the array
    // newBurgerList.push({name,color}) // if names are the same as the argument being passed 
    this.setState({burgerIngredients:newBurgerList})
  }

  clearBurgerPane = () => {
    this.setState({burgerIngredients:[]})
  }

  render () {
    
    return (
      <>
      <div className='flex-container'>
        <div className='pane'>
          <h1>Burger Stacker</h1>
        </div>
      </div>
      
      
      <div className='flex-container'>  
        <div className='pane'>
        <IngredientList 
          ingredients={this.props.ingredientList} 
          addToBurger={this.addToBurger} 
        />
        </div>
        <div className='pane'>
        <BurgerPane 
          burgerIngredients={this.state.burgerIngredients}
          clearBurgerPane={this.clearBurgerPane}
          />
        </div>
      </div>
      </>
    )
  }
}
export default App