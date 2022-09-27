import React, { Component } from 'react'
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

class App extends Component {
  state = {
    ingredients: this.props.ingredients,
    addedStack: [],
    newItem: '',
    newColor: '',
    name:'',
    color:''
  }

  handleAddIn = (item, color) => {
    this.setState({
      newItem: item,
      newColor: color
    })

    this.setState((prevState) => {
      return {
        addedStack: [{name: prevState.newItem, color:prevState.newColor},...prevState.addedStack]

      }
    })
  }

  clearAll = () => {
    this.setState({
      addedStack: []
    })
  }

  undoOne = () => {
    this.state.addedStack.splice(0,1)
    this.setState({
      addedStack: this.state.addedStack
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState) => {
      return {
        ingredients: [...prevState.ingredients, {
          name: prevState.name,
          color: prevState.color
        }],
        name:'',
        color:''
      }
    })
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='leftCol'>
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor='name'>Name:</label>
              <input 
              type='text'
              id='name'
              name='name'
              onChange={this.handleInputChange}
              value={this.state.name}
              />
              <label htmlFor='color'>Color:</label>
              <input 
              type='text'
              id='color'
              name='color'
              onChange={this.handleInputChange}
              value={this.state.color}
              />
              <button type='submit'>Create New Ingredient</button>
            </form>
            <IngredientList
              ingredients={this.state.ingredients}
              handleAddIn={this.handleAddIn}
            />
          </div>
          <div className='rightCol'>
            <BurgerPane
              stackList={this.state.addedStack}
              color={this.state.newColor}
              undo={this.undoOne}
            />
            <button onClick={this.clearAll}>clear</button>
            {/* <button onClick={this.undoOne}>Undo</button> */}
          </div>
        </div>
      </div>
    )
  }
}


export default App;
