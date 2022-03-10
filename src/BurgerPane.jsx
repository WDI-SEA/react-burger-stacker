import { Component } from "react";
import Ingredient from "./Ingredient";

class BurgerPane extends Component {
  render() {
    return (
      <div className="burgerpane-wrapper">
        <h2>BurgerPane</h2>  
        <Ingredient />
      </div>
    )
  }
}

export default BurgerPane