import React, {Component} from "react";

export default class BurgerStack extends Component {
    render() {

        return(
            <>
            <div className="burgerDiv">{this.props.ingredient}</div>
            </>
        )
    }

}