import './App.css'
import {Component} from 'react'

class Ingredient extends Component {
    render() {
        return(
        <div className='ingredient' onClick={() =>{this.props.addToBurger(this.props.ingredient)}}>
            <h1>{this.props.ingredient.name}</h1>
        </div>
        )
    }

}

export default Ingredient