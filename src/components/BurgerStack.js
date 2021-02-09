import React, { Component } from "react";
import Ingredients from './Ingredients';

class BurgerStack extends Component {
    constructor(props) {
        super()
    }
    render() {
        console.log(this.props.burger, "burg burg")
        return (
            <div className="BurgerStack">
                <p>--burger stack here</p>
            </div>
        )
    }
}

export default BurgerStack;