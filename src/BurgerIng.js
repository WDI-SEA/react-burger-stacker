import React, { Component } from 'react'

export default class BurgerIng extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.ingredientColor}}>
                {this.props.ingredientName}
            </div>
        )
    }
}