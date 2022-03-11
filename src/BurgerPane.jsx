import "./App.css";
import { Component } from "react";
import Ingredient from "./Ingredient";
import Clear from "./Clear";

class BurgerPane extends Component {
  render() {
    const burger = this.props.burgerIngredients.map((layer, index) => {
      return <Ingredient key={`layer-index-${index}`} ingredient={layer} />;
    });
    return (
      <section className="burger-pane">
        <h1>BurgerPane</h1>
        {burger}
        <Clear clearBurger={this.props.clearBurger} />
      </section>
    );
  }
}

export default BurgerPane;
