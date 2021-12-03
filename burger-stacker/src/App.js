import './App.css';
import BurgerStacker from './components/BurgerStacker';

function App() {
  return (
    <div className="App">
      <BurgerStacker />
    </div>
  );
}

export default App;

// old function version of the boilerplate--using class so that state works as expected
// function App() {
//   // function to identify that a button has been clicked
//   const addIngredient = (e) => {
//     e.preventDefault()
//     console.log(e)
//   }
//   return (
//     <div className="App">
//       <h1>burger stacker?</h1>
//       <IngredientMenu ingredients={ingredients} addIngredient={this.addIngredient} />

//       <div className="BurgerDisplay">
//         <p>The Burger will go here</p>
//       </div>
//     </div>
//   );
// }