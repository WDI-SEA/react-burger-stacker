import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class BurgerStack extends Component {
    render() {

        const myBorger = this.props.burgerStack.map((burger, i) => {
            if (burger) {
                return (
                    <div style={{ backgroundColor: this.props.ingredients.color }} key={`ingredient${i}`}>
                        <ul>
                            <li>
                                {burger}
                            </li>
                        </ul>
                    </div>
                )
            }
        })

        return (
            <div>
                {/* <p>{this.props.burgerStack}</p> */}
                {myBorger}
                <Ingredients
                
                />

            </div>
        )
    }
}