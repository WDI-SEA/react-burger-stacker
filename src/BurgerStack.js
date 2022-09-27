import React, {Component} from 'react'
import Ingredients from './Ingredients'

export default class BurgerStack extends Component {
    render() {
        return (
            <div>
                <h1>This is the BurgerStack</h1>
                <Ingredients />
            </div>
        )
    }
}