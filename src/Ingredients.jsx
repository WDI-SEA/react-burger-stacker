import {Component} from "react"

export default class Ingredients extends Component {
    render() {
        
        return(
            <div>
                
                <p>{this.props.name}</p>
                <p>{this.props.color}</p>
                
            </div>

        )
    }
}
