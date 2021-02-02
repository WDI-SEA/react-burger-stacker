import React, { Component } from "react";
import Ingredients from './Ingredients';

class BurgerStack extends Component {
    render() {
        return (
            <div className="BurgerStack">
                <p>--burger stack here</p>
                <Ingredients />
            </div>
        )
    }
}

export default BurgerStack;