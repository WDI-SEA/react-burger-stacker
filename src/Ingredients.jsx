import React, {Component} from 'react'

export default class ingredients extends Component {
    render () {
        return (
            <div>
                this is where the individual ingredients will be rendered
                <ul>
                    <li>
                        Ingredient:{this.props.name}
                    </li>
                </ul>
            </div>
        )
    }
}