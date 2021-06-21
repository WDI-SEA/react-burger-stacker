import React, {Component} from 'react'

export default class ingredients extends Component {
    render () {
        return (
            <div style={{backgroundColor:this.props.color}}>
                {this.props.name}
            </div>
        )
    }
}