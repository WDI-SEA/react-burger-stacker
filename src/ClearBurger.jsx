import { Component } from 'react'

export default class ClearBurger extends Component {
    render() {
        return (
            <div className='clear-burger'>
                <button onClick={this.props.clearBurger}>Clear</button>
            </div>
        )
    }
}