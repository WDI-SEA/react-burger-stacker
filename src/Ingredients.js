import React from 'react'



export default class Ingredients extends React.Component {
  render(){
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
    const burgerIngeredients = ingredients.map((item, idx) =>{
      
    })

    
    return(
      <div>
        <h1>Ingredient1</h1>
        <h1>Ingredient2</h1>

        
        



        
      </div>
    )
  }

}