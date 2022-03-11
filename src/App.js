
import './App.css';
import React, { Component } from 'react';
import IngredientsPane from './IngredientsPane';
import BurgerPane from './BurgerPane';

class App extends Component {
  state = {
    ingredients:[
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
    ],
    onBurger:[],
    newIngredientName:"",
    newIngredientColor:""
  };

  handleClick=(ingredient)=>{
      this.setState((prevState, id)=>({
          onBurger: [ingredient, ...prevState.onBurger]
      }))
  }

  clearBurger=()=>{
    this.setState({
      onBurger: []
    })
  }

  

  handleAddIngredent=(namee, colorr)=>{

    this.setState((prevState, props)=>({
      ingredients: [...prevState.ingredients,{name: namee, color:colorr} ]
    }))

  }

  render() {
    return (
      <div className="container">
        <IngredientsPane ingredients={this.state.ingredients} onBurger={this.state.onBurger} handleClick={this.handleClick} handleTextChange={this.handleTextChange} handleAddIngredent={this.handleAddIngredent}/>
        <BurgerPane ingredients={this.state.ingredients} onBurger={this.state.onBurger} handleClick={this.handleClick} clearBurger={this.clearBurger}/>

      </div>
    );
  }
}

export default App;
