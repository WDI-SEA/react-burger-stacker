import React, {Component} from 'react'

export default class BurgerStack extends Component {
    render() {
        return (
            <>
            {this.props.item.name}
            </>
        )
    }
}