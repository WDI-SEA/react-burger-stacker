import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


export default function BurgerPane (props) {
        return (
            <div>
                <BurgerStack clickedIngredients={props.clickedIngredients} />
                <ClearBurger clearBurger={props.clearBurger} />
                {console.log(props.clickedIngredients)}
            </div>
        )
    }


    // export default class BurgerPane extends Component {
    //     render() {
    //         return (
    //             <div>
    //                 <BurgerStack clickedIngredients={this.props.clickedIngredients} />
    //                 <ClearBurger clearBurger={this.props.clearBurger} />
    //             </div>
    //         )
    //     }
    // }