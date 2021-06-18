import React, { Component } from 'react'
import Ingredients from './Ingredients'

const ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
]

export default class IngredientList extends Component {
    render() {
        const ingredBuilder = ingredients.map((ingredient, index) => {
            return <Ingredients 
                name={ ingredient.name }
                color={ ingredient.color }
                key={ index }
            />
        })
        return (
            <div>
                <p>Hello from IngredientList.jsx</p>
                { ingredBuilder }
            </div>
        )
    }
}