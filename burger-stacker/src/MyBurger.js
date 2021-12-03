import React, { useState } from "react";
import Ingredients from "./Ingredients";
import "./MyBurger.css";
import NewBurger from "./NewBurger";

const MyBurger = props => {
  // state = {
  //   ingredientsArray: this.props.theIngredients,
  //   newFood: [],
  // };

  const [ingredientsArray, setIngredientsArray] = useState(props.theIngredients)
  const [newFood, setNewFood] = useState([])

  const addFood = (e) => {
    console.log(e.target.color);
    e.preventDefault();
    let currentArray = newFood;
    let addedThings = { name: e.target.name };
    currentArray.unshift(addedThings);
    this.setState({
      newFood: currentArray,
    });
  };

  const clearFood = (e) => {
    this.setState({
      newFood: [],
    });
  };


    return (
      <div className="container">
        <div className="title">
          <h1>Burger Stacker</h1>
        </div>
        <div className="Burger">
          <NewBurger burgerItems={newFood} delete={clearFood} />
        </div>
        <div className="ingredients">
          <Ingredients
            completeIngredients={ingredientsArray}
            changedIngredients={addFood}
          />
        </div>
      </div>
    );
}

export default MyBurger 