import { Component } from "react"
import BurgerPane from "./BurgerPane"

const ingredientz = [
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

  export default class App extends Component {
      render () {
          const burgMap = ingredientz.map((ingredient, index) => {
              return <BurgerPane
              name={ingredient.name}
              key={index}
              />
          })
          return(
              <div>
                  {burgMap}
              </div>
          )
      }
  }
  console.log('wtf is going on in this code brother')