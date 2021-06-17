import React from 'react'
import Ings from './Ings'

const ingData = [
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

const IngList = () => {
    const ingredients = ingData.map((e, index) => {
        return <Ings
            name={e.name}
            color={e.color}
            key={index}
        />
    })
    return (
        <div>
            <h2>Hello from IngList!</h2>
            {ingredients}
        </div>
    )
}

export default IngList