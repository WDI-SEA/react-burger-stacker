import React, { Component } from 'react'

export default class BurgerStack extends Component {
    render() {
        const burgerIngredients = this.props.burgerStack.map((item, i) => (
            <div key={`item + ${i}`} style={{ backgroundColor: item.color}} >
                {item.name}
                
            </div>
        ))
        return (
            <div  >
                {burgerIngredients}
            </div>
        )
    }
}