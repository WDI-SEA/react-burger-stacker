import React, {Component} from 'react'
import Burger from "./Burger"

export default class BurgerHome extends Component {
    render() {
        return(
            <div>
                <p>the button on ingredients list was clicked {this.props.counter} time(s)</p>
                This is where the burger to be stacked will live
                <Burger ingredients={this.props.ingredients} />
               
            </div>
        )    
    }
        
}
