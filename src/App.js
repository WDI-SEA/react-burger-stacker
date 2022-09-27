import React, { Component} from "react";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";

const ingredients =
[
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
  // state  that keeps track of ing user has clicked on in an array
  state = {
    clickedIngredients: []
  }
  // click event handler to add ingredient to array in state of clicked ingr
  handleIngredientClick = ingredient => {
    console.log("ing was clicked")
    this.setState(prevState =>{
      const clickedIngredients = [ingredient, ...prevState.clickedIngredients]

    return{
      clickedIngredients
    }
    })
  }
  // clear button click handler which emptys the array  in state
  handleBurgerClear = ()=>{
    this.setState({
      clickedIngredients: []
    })
  }

  render(){
    return(
          <div className="ingredients" style={{display:"flex", margin:"3rem", alignItems:"flex-end"}}>
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

