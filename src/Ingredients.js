import React from 'react';

export default function Ingredients(props) {
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
    
    const allIngredients = burgerIngredients.map((ing, i) => {
        return (
            <div key={i}>
            <li style={{color: ing.color, listStyle: 'none'}}>{ing.name}</li>

            <button type="submit"
            onClick={() => props.addIngredient(ing.name)}>
            Add {ing.name} to Borgor
            </button><br /><br />
            </div>
        ) 
    })

    return (
        <> 
        <h5>Here are the Ingredients</h5>
        {allIngredients}
        </>
    )
}