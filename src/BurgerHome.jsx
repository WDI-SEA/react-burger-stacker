import React, {Component} from 'react'
import Burger from "./Burger"

export default class BurgerHome extends Component {
    render() {
        return(
            <div>
                <Burger ingredients={this.props.ingredients} />
               
            </div>
        )    
    }
        
}
