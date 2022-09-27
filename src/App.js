import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

class App extends Component {
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

    addToStack = (e) => {
        console.log(e.target)
        console.log(e.target.style.backgroundColor)
        console.log(e.target.innerText)
        this.setState({
            burgerIngredients: [{name: e.target.innerText, color: e.target.style.backgroundColor}, ...this.state.burgerIngredients]
        })
    }
    
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render() {
        return (
            <main>
                <h1>BurgerStacker</h1>

                <div class="row">
                  <div class="column">
                    <IngredientList 
                      ingredients={this.state.ingredients} 
                      add={this.addToStack} 
                    />
                  </div>
         
                  <div className="panes" class="column">
                    <BurgerPane 
                      ingredients={this.state.burgerIngredients} 
                      clear={this.clearBurger} 
                    />
                  </div>
                </div>
            </main>
        )   
    }
}

export default App