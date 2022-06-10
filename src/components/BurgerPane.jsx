import React, { Component } from 'react'
import Ingredient from './Ingredient.jsx'

export default class BurgerPane extends Component {
    render() {
        const BurgerStack = this.props.ingredientsInBurger.map((burgerIngred,i)=>{
            return  <Ingredient key= {`burgerIngred${i}`} ingred={burgerIngred} />
        })
    return (
        <>
            <div>BurgerPane</div>
            <button
            onClick={this.props.handleBurgerClear}
            >CLEAR</button>
            {BurgerStack}
        </>
        )
  }
}
