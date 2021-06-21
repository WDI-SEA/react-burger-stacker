import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class BurgerStack extends Component {
    render() {
        return (
            <div>
                <p>Hello from BurgerStack.jsx</p>
                {this.props.ingredients.map(ingredient => {
                    return <Ingredients name={ingredient}/>
                })}
            </div>
        )
    }
}