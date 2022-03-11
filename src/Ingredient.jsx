import { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        // console.log(this)
        return (
            <div className='ingredient' style={{backgroundColor: this.props.ingredient.color}}>
                <p>{this.props.ingredient.name}</p>
                <label htmlFor={this.props.name+' button'}></label>
                <input type='button' onClick={this.props.addIngredient} name={this.props.ingredient.name} id={this.props.name+' button'} value='+' />
            </div>
        )
    }
}