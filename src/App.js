import "./App.css";
import React, { useState } from "react";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";

export default function App(props) {
  const [burgerIngredients, setBurgerIngredients] = useState([]);

  const clearBurger = () => {
    setBurgerIngredients([]);
  };

  const addToBurger = (ingredient) => {
    console.log("HUYUUUUUU");
    setBurgerIngredients([...burgerIngredients, ingredient]);
  };

  return (
    <>
      <h1>Burgerstacker</h1>
      <main>
        <IngredientList
          ingredients={props.ingredientsList}
          addToBurger={addToBurger}
        />
        <BurgerPane
          burgerIngredients={burgerIngredients}
          clearBurger={clearBurger}
        />
      </main>
    </>
  );
}

// class App extends Component {
//   state = {
//     burgerIngredients: [],
//   };

//   clearBurger = () => {
//     this.setState({ burgerIngredients: [] });
//   };

//   addToBurger = (ingredient) => {
//     // add the selected ingredient to the burgerIngredients state
//     // this.setState((prevState, props)=>{
//     //   return {burgerIngredients: [...prevState.burgerIngredients, {name, color}]}
//     // })
//     console.log("HUYUUUUUU");
//     let newBurgerList = this.state.burgerIngredients;
//     newBurgerList.unshift(ingredient);
//     this.setState({ burgerIngredients: newBurgerList });
//   };

//   render() {
//     return (
//       <>
//         <h1>Burgerstacker</h1>
//         <main>
//           <IngredientList
//             ingredients={this.props.ingredientsList}
//             addToBurger={this.addToBurger}
//           />
//           <BurgerPane
//             burgerIngredients={this.state.burgerIngredients}
//             clearBurger={this.clearBurger}
//           />
//         </main>
//       </>
//     );
//   }
// }
