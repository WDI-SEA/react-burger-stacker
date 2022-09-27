import React, {Component} from 'react'

export default class Ingredients extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color}}>
                {this.props.ingredient}
                
            </div>
        )
    }
}