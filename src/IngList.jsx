import React from 'react'
import Ings from './Ings'

const IngList = (props) => {
    const ingredients = props.ingredient.map(e => {
        return <Ings
                name={e.name}
                color={e.color} 
        />
    })
    return (
        <div>
            <ul>
                <li>
                    {ingredients}
                </li>
            </ul>
            <h2>Ingredients</h2>
        </div>
    )
}

// const ingData = [
//     {name: 'Kaiser Bun', color: 'saddlebrown'},
//     {name: 'Sesame Bun', color: 'sandybrown'},
//     {name: 'Gluten Free Bun', color: 'peru'},
//     {name: 'Lettuce Wrap', color: 'olivedrab'},
//     {name: 'Beef Patty', color: '#3F250B'},
//     {name: 'Soy Patty', color: '#3F250B'},
//     {name: 'Black Bean Patty', color: '#3F250B'},
//     {name: 'Chicken Patty', color: 'burlywood'},
//     {name: 'Lettuce', color: 'lawngreen'},
//     {name: 'Tomato', color: 'tomato'},
//     {name: 'Bacon', color: 'maroon'},
//     {name: 'Onion', color: 'lightyellow'}
// ]

// TERRY CODE
// const IngList = () => {
//     const ingredients = ingData.map(e => {
//         return <Ings
//             name={e.name}
//             color={e.color}
//         />
//     })
//     return (
//         <div>
//             {ingredients}
//             <h2>Ingredients</h2>
//         </div>
//     )
// }


export default IngList