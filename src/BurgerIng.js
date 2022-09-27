import React, { Component } from 'react'

export default class BurgerIng extends Component {
    render() {
        return (
            <div className={`ingredient 
            ${this.props.isTop === true && this.props.ingredientName.includes('Bun')? 'clsBunTop' : ''} 
            ${this.props.isBottom === true && this.props.ingredientName.includes('Bun')? 'clsBunBtm' : ''} 
            ${this.props.ingredientName.includes('Patty')? 'clsPatty' : ''}
            ${this.props.ingredientName.includes('Onion')? 'clsOnion' : ''}`} 
             style={{backgroundColor: this.props.ingredientColor}}>
                {this.props.ingredientName}
            </div>
        )
    }
}