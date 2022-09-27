import React, {Component} from 'react'

export default class Ingredients extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color}} 
            onClick={this.props.handleIngredientClick}>
                {this.props.ingredient}
                
            </div>
        )
    }
}