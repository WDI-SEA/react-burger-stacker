import React, {Component} from 'react'

export default class ClearBurger extends Component {
    render() {
        return (
            <div className='clearBtn'>
                <button onClick={this.props.handleBurgerClear}>Clear Burger</button>
            </div>
        )
    }
}