import React, { Component } from 'react'
import Ingredient from './Ingredient.jsx'

export default class BurgerPane extends Component {
    render() {
        const BurgerStack = this.props.ingredientsInBurger.map((burgerIngred,i)=>{
            return  <Ingredient key= {`burgerIngred${i}`} ingred={burgerIngred} />
        })
    return (
        <>
            <div>Burger Pane:</div>
            <button
            className='text-xs border rounded-lg min-w-[3rem] hover:text-slate-500'
            onClick={this.props.handleBurgerClear}
            >CLEAR</button>
            {BurgerStack}
        </>
        )
  }
}
