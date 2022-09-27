import React, {Component} from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {
        return (
            <div>
                <h1>This is the BurgerPane</h1>
                <BurgerStack />
                <ClearBurger />
            </div>
        )
    }
}