import React, { Component } from 'react' 
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
// loop over the burgerbits the user added
// display one ingredient component for every bit of the burger


    render() {
        let burgerBits = this.props.ingredients.map(mapIngredient => {
          return  <Ingredient ingredient={mapIngredient} clicky={this.props.remove} />
        })
        return (
         <section className ="pane">
             <h3>The Burger</h3>
             { burgerBits }
             <button onClick={this.props.clear}>Clear Burger</button>
         </section>
        )
    }
}