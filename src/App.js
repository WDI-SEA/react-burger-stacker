import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'



export default class App extends Component {
    // have state that keeps track of clicked ingredients in an array
    // array of ingredients that user has clicked on 
    state = {
        ingredients: [
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
        burgerIngredients: []
    }

    // click even handler -- when an ingredient is click, it will add that ingredient to that array in state of clicked ingredients
    addToStack = (e) => {
        console.log(e.target)
        console.log(e.target.style.backgroundColor)
        console.log(e.target.innerText)
        this.setState({
            burgerIngredients: [{name: e.target.innerText, color: e.target.style.backgroundColor}, ...this.state.burgerIngredients]
        })
    }

    // clear button click handler, which will empty the array in the state
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render() {
        return (
            <main>
                <h1>BurgerStacker</h1>

                <div style={{ display: 'flex', margin: '3rem'}}>
                    {/* will receive ingredients as props and render them and a evnet handle ingredient clicks */}
                    <IngredientList 
                      ingredients={this.state.ingredients} 
                      add={this.addToStack} 
                    />

                    {/* will receive the clear button event handler and the clicked ingredients from state to render */}
                    <BurgerPane 
                      ingredients={this.state.burgerIngredients} 
                      clear={this.clearBurger} 
                    />
                </div>
            </main>
        )   
    }
}