import React, { Component } from 'react' 
import Ingredients from './Ingredients'

export default class BurgerPane extends Component {
    render() {
        // const items = this.props.items.map((ingredients, index) => {
        //     return <ingredients
        //     ingredients={ingredients.ingredients}
        //     />
        //     })

        return(
            <div>
                <h1>BURGERPANE IS WORKING!</h1> 
                 {<h3>{this.props.burgerstack}</h3>} 

                {/* <h3>{this.props.clearburger}</h3>  */}

                {/* {items}   */}
            </div>
        )
    }
}