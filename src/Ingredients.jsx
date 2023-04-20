import React, {Component} from "react"

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


// const handleIngredient = (e) => {
//     console.log(e.target.value)
//     ingredients.push({name: `${e.target.value}`, color: "pink"})
// }

export default class Ingredients extends Component {


    render() {
        const  onIngredientClick  = this.props.onIngredientClick
    
        const items = ingredients.map((item, i) => {
          return (
            <button
              key={'item' + i}
              style={{ backgroundColor: item.color }}
              className="special"
              onClick={() => onIngredientClick(item)}
            >
              {item.name}
            </button>
          )
        })

    

        return(
            <>
            <div className="burger">
            {items}
            </div>
            {/* <form>
                <input name="name" placeholder="Name of Ingredient"></input>
                <button type="text" onClick={handleIngredient}>Add ingredient</button>
            </form> */}
            </>
        )
    }
}