import React, { Component } from 'react'
import './App.css';
import Ingredients from './Ingredients'
import Stacker from './Stacker'

class App extends Component {
  //initialize the state of the full list of ingredients here
  state = {
    fullList: this.props.ingredients,
    //to store array that will render stacked items
    stackedList: []
  }

  //Helper Method to be called to update stackedList to pass to Stacker as prop
  stackHelper = (e) => {
    e.preventDefault()
    console.log('This is the list item click: ', e)
  }

  render() {
    console.log('This is state', this.state.fullList)
    //I need to pass the full list to the ingredients 
    //component
    return (
      <div className="App">
        <div className="Ingredients-div">
        <h1>This is the App Container</h1>
        <Ingredients itemsList={this.state.fullList} onClick={this.stackHelper}/> 
        </div>
        <div className="Stacker-div">
        <h1>This is the Stacker Container</h1>
        <Stacker /> 
        </div>
      </div>
    );
  }
}

export default App;
