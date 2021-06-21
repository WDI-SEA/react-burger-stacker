import { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane.jsx'

const ingredientData = [
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

class App extends Component {
  render() {
    const ingredientStuff = ingredientData.map((ingredients, index) => {
      return <IngredientList 
        name={ingredients.name}
        key={index}
      />
    })
    return (
    <div>
      {ingredientStuff}
    </div>
    )
  }
}

export default App;
