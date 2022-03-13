import React, { useState } from 'react'
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";

export default function App ( props ) {

  const [burgerIngredients, setIngredient] = useState([])

  const addToBurger = (ingredient) => {
    setIngredient([ingredient, ...burgerIngredients])
  }

  const clearBurger = () => {
    setIngredient([])
  }

  return (
    <>
      <h1>Burger Stacker</h1>
      <main>
        <IngredientList
        ingredients = {props.ingredientsList}
        addToBurger={addToBurger}
        />
        <BurgerPane
        burgerIngredients={burgerIngredients}
        clearBurger={clearBurger}/>
      </main>
    </>
  )
}

// import "./App.css";
// import React, { Component } from "react";
// import IngredientList from "./IngredientList";
// import BurgerPane from "./BurgerPane";

// class App extends Component {
//   state = {
//     burgerIngredients: [],
//   };

//   addToBurger = (ingredient) => {
//     console.log("adding to burger");
//     // add the selected ingredient to the burgerIngredients state
//     // push the new ingredient to the burger
//     //   this.setState((prevState, props) => ({
//     //     burgerIngredients: [...prevState.burgerIngredients, {name, color}]
//     //   }))
//     // }
//     let newBurgerList = this.state.burgerIngredients
//     newBurgerList.unshift(ingredient)
//     this.setState({ burgerIngredients: newBurgerList })
//   }

//   clearBurger = () => {
//     this.setState({
//       burgerIngredients: []
//     })
//   }

//   render() {
//     return (
//       <>
//         <h1>Burger Stacker</h1>
//         <main>
//           <IngredientList ingredients={this.props.ingredientsList} addToBurger={this.addToBurger} />
//           <BurgerPane burgerIngredients={this.state.burgerIngredients} clearBurger={this.clearBurger}/>
//         </main>
//       </>
//     );
//   }
// }

// export default App;
