
import React, { Component } from 'react';
import Ingredients from './Ingredients';
import BurgerStack from './BurgerStack';

class Burger extends Component {

  state = {
    ingredientsArr: this.props.ingredientsArray,
    burger: []
  }

  addingIngredient = (e) => {
    let tryingToAddIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
    console.log(tryingToAddIngredient)
    let temp = this.state.burger
    temp.push(tryingToAddIngredient)
    console.log('Once you kill a cow, youve gotta make a burger...')
    console.log(this.state.burger)
    console.log(e.target.innerText)
    this.setState({
      burger: temp
    })
    
  }
  
  render() {
    return (
      <>
        <ul>
          {this.state.ingredientsArr.map((ingredient, index) => {
          return (
            <button onClick={this.addingIngredient}>
            <Ingredients ingredient={ingredient} key={index} />
            </button>

          )

        })}
        </ul>
        
        <div>
          <BurgerStack burger={this.state.burger} />
        </div>
      </>
    )
  }
}

export default Burger;
