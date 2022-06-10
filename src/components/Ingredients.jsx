import React, {Component} from 'react'



export default class Ingredients extends Component {

    
    render() {
        const ingredient = this.props.ingredient.split(" ")
        
        return (
            <div className="ingredient-container" 
            style={{backgroundColor: `${ingredient[1]}`}}
            >
                <p >{this.props.ingredient[0]}</p>
                
            </div>
        )
    }
} 