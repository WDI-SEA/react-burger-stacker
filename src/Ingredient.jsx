import {Component} from 'react'

export default class Ingredient extends Component {
    render () {
        return (
            <div onClick={this.props.handleAddIngred} style={{backgroundColor: this.props.ingred.color, width:'150px', height:'40px'}}>

                {this.props.ingred.name}
            </div>
        )
    }
}