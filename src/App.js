import React, { Component } from "react"
import './App.css';
import BurgerPane from "./BurgerPane";
import IngredientList from "./IngredientList";

class App extends Component {
  render() {
    return (
      <div id ="App" style={{
        display: "flex",
        flexDirection:"row"
      }}
      >
      <IngredientList

      />
      <BurgerPane
      />
      </div>
    )
  }
}

export default App;
