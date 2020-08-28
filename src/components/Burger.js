import React, {Component} from 'react';
import './BurgerStyle.css';

export default class Burger extends Component {
  state = {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0
  }

  addRemoveIngredient = (action, ingredient) => {
      let {
        lettuce,
        tomato,
        cheese,
        meat
      } = this.state;

      let stateValue;

      switch(ingredient){
        case 'lettuce':{
          stateValue = lettuce;
          break;
        }
        case 'tomato':{
          stateValue = tomato;
          break;
        }
        case 'cheese':{
          stateValue = cheese;
          break;
        }
        case 'meat':{
          stateValue = meat;
          break;
        }
          default: break;
      }
      
      if(action === 'add'){
          stateValue = stateValue + 1
      } else {
          stateValue = stateValue - 1;
      }
      this.setState({
          [ingredient]: stateValue >= 0 ? stateValue : 0
      });
  }

  burgerContent = () => {
      let {
        lettuce,
        tomato,
        cheese,
        meat
      } = this.state;

      let burger = [];


  }

  render() {
    return (
      <>
          <div className="burgerIngredients">
              <div className="topSide"></div>
              Content
              <div className="bottomSide"></div>
          </div>
          <div className="ingredientsBlock">
              <p>Lettuce 🥬</p>
              <div className="ingrBtns">
              <button onClick={() => this.addRemoveIngredient('add', 'lettuce')} className="ingrBtn">Add</button>
              <button onClick={() => this.addRemoveIngredient('remove', 'lettuce')} className="ingrBtn">Remove</button>
              </div>
              <p>Tomato 🍅</p>
              <div className="ingrBtns">
              <button onClick={() => this.addRemoveIngredient('add', 'tomato')} className="ingrBtn">Add</button>
              <button onClick={() => this.addRemoveIngredient('remove', 'tomato')} className="ingrBtn">Remove</button>
              </div>
              <p>Cheese 🧀</p>
              <div className="ingrBtns">
              <button onClick={() => this.addRemoveIngredient('add', 'cheese')} className="ingrBtn">Add</button>
              <button onClick={() => this.addRemoveIngredient('remove', 'cheese')} className="ingrBtn">Remove</button>
              </div>
              <p>Meat 🍖</p>
              <div className="ingrBtns">
              <button onClick={() => this.addRemoveIngredient('add', 'meat')} className="ingrBtn">Add</button>
              <button onClick={() => this.addRemoveIngredient('remove', 'meat')} className="ingrBtn">Remove</button>
              </div>
          </div>
      </>
    );
  }
}
