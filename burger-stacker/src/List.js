import React, {Component} from 'react'

export default class List extends Component{

    
    render(){
            const burgerItems = this.props.ingredients.map ((food, i)=>{
                return <li key={i}>
                    {food.name} 
                    <button onClick={this.props.addIngredient}>add to burger</button>
                </li>
            })
            return(
                <ul>{burgerItems}</ul>
            )
        
    }
}