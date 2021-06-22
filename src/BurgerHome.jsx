import React, {Component} from 'react'
import Burger from "./Burger"
import ClearBurger from "./ClearBurger"


export default class BurgerHome extends Component {
    render() {
        return(
            <div>
                <Burger addedIngredients={this.props.addedIngredients} />
               <ClearBurger  clearBurger={this.props.clearBurger}/>
            </div>
        )    
    }
        
}
