import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class BurgerPane extends Component {
    render() {
        const stackBurger = this.props.stack.map((item, i) => {
            return <Ingredients
                i={i}
                item={item}
                />
        })
        return (
            <>
            <h1>Burger Pane</h1>
            <button onClick={this.props.handleRemove}>Clear</button>
            
            </>
        )
    }
}