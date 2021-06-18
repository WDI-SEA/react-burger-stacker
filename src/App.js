import {Component} from 'react'
import BurgerPane from './BurgerPane'
import Ingredients from './Ingredients'

let ingredientList = [
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


export default class App extends Component{
  render() {
    const ingredients = ingredientList.map((ingr, index) =>{
      return <Ingredients
      color={ingr.color}
      name={ingr.name}
      key={index}
      />
    })
    return(
      <div>
        Hello
        {ingredients}
        <BurgerPane/>
      </div>
    )
  }
}

