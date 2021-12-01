import React, { Component } from 'react'


export default class BurgerPane extends Component {

    render () {
       
      
            let allIngredients = this.props.ingredients.map((ingredient, i) => {
                return (
                    <li>{ingredient.color}</li>
                )
            })
             
             return (
                 <div className="burger-pane">
                    <ul>
                        {allIngredients}
                    </ul>
                 </div>
             )
    }   
}