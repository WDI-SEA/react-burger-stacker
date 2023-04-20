import React, { Component } from 'react'

export default class BurgerStack extends Component {
    render() {
        return (
            <div style={{border: 'solid 2px green', display: 'flex'}} >
                {this.props.burgerStack}
            </div>
        )
    }
}