import React from 'react';

export default function Ingredients() {
    let burgerIngredients = [
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
        {name: 'Onion', color: 'purple'}
    ]

    const allIngredients = burgerIngredients.map(ing => {
        return (
            <>
            <li style={{color: ing.color, listStyle: 'none'}}>{ing.name}</li>
            <button type="submit">Add {ing.name} to Borgor</button><br /><br />
            </>
        ) 
    })

    return (
        <> 
        <h5>Here are the Ingredients</h5>
        {allIngredients}
        </>
    )
}