import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

class BurgerPane extends Component {
    render() {
        return (
            <div>
                <BurgerStack ingredients={this.props.ingredients} />
            </div>
        )
    }
}

export default BurgerPane;