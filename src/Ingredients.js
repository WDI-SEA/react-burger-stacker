import {Component} from 'react'

export default class Ingredients extends Component {
    render() {
        return(
            <div
                style={{
                    backgroundColor: this.props.item.color,
                    width:"200px",
                    height:"25px"
                }}
                onClick={this.props.handleAddToStack}
            >
                {this.props.item.name}
            </div>
        )
    }
}