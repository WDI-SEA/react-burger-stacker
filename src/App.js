import React, { Component } from 'react'
import './App.css';
import Ingredients from './Ingredients'
import Stacker from './Stacker'

class App extends Component {
  //initialize the state of the full list of ingredients here
  state = {
    fullList: this.props.ingredients
  }
  render() {
    console.log('This is state', this.state.fullList)
    //I need to pass the full list to the ingredients 
    //component
    return (
      <div className="App">
        <div className="Ingredients-div">
        <h1>This is the App Container</h1>
        <Ingredients itemsList={this.state.fullList}/> 
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
