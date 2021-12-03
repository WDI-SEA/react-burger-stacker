import { useState } from "react";
import List from './List.js'
import Stack from './Stack.js'

const Ingredients = props => {
        
    const [allIngredients, setAllIngredients] = useState(
        [
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
    )

    const [addedIngredients, setAddedIngredients] = useState([])


    const addIngredient = (e) => {
        e.preventDefault()
        let lastAdded = allIngredients[e.target.id]
        let newArray = addedIngredients

        newArray.unshift(lastAdded)

        setAddedIngredients( prevAddedIngredients => {
            return newArray
        })
            
        console.log('added ingredients: ', addedIngredients)
    }

    const clearStack = () => {
        console.log('clearing stack')
        setAddedIngredients([])
    }

  
    return (
    <>
        <div className="leftColumn">
            <List list={allIngredients} add={addIngredient}/>
        </div>
        <div className="rightColumn">
            <Stack stackedItems={addedIngredients} clearStack={clearStack}/>
        </div>
    </>
    )
}

export default Ingredients