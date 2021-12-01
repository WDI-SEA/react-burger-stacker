import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {

        const ingredientsArray = this.props.ingredientsToShow.map((food, index) => {
            return <li key={index}>{food.name}</li>
        })

        console.log("these are the fruits", ingredientsArray);
        return(
            <ul>
                {ingredientsArray}
            </ul>

        )
    }
}
