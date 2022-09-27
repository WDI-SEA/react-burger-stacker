import React, {Component} from 'react'

export default class Ingredients extends Component {
    render() {
        return (
            <div  className={`ingredient flexItem ${this.props.ingredient.includes('Bun')? 'clsBun' : ''} ${this.props.ingredient.includes('Patty')? 'clsPatty' : ''}
            ${this.props.ingredient.includes('Onion')? 'clsOnion' : ''}`} 
            style={{backgroundColor: this.props.color}} 
            onClick={this.props.handleIngredientClick}>
                {this.props.ingredient}
                
            </div>
        )
    }
}