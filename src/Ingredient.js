import React, {Component} from 'react'

export default class Ingredient extends Component {
    render(){
        const styles = {
            backgroundColor: this.props.ingredient.color,
            color: this.props.ingredient.color === '#3F250B' ? 'white' : 'black' 
        }
        return (
            <div 
                style={styles}
                onClick={ this.props.handleIngredientClick ? 
                    () => this.props.handleIngredientClick(this.props.ingredient) : 
                    () => {}
                }
                >
                <p>{this.props.ingredient.name}</p>
            </div>
        )
    }
}