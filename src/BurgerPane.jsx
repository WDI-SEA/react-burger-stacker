import "./App.css";
import Ingredient from "./Ingredient.jsx";
import Clear from "./Clear.jsx";

export default function BurgerPane(props) {
  let burger = props.burgerIngredients.map((layer, index) => {
    return (
      <Ingredient
        key={`layer-index-${index}`}
        ingredient={layer}
        addToBurger={() => {}}
      />
    );
  });
  return (
    <section className="burger-pane">
      <h1>BurgerPane</h1>
      {burger}
      <Clear clearBurger={props.clearBurger} />
    </section>
  );
}
