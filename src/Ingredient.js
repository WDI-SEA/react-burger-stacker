import React, {Component} from 'react'

export default class Ingredient extends Component {
    render() {
        return (
            <>
                {this.props.item.name}
            </>
        )
    }
}