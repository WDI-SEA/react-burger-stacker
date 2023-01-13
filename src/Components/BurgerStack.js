import React, {Component} from "react";

export default class BurgerStack extends Component {
    render() {

        return(
            <>
            <div 
            className="burgerDiv"
            style={{backgroundColor: this.props.ingredient.color}}
            >
                {this.props.ingredient.name}
            </div>
            </>
        )
    }

}