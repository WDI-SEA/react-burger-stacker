import { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    render() {
        const stackToRender = this.props.stack.map((stackItem, i) => {
            return <Ingredient 
                item={stackItem}
                key={"stack"+i}
            />
        })
        return (
            <>
                <h2>Burger Pane</h2>
                {stackToRender.reverse()}
                <button
                    onClick={this.props.handleRemoveFromStack}
                >
                    Clear
                </button>
            </>
        )
    }
}




// import { Component } from 'react'


// export default class BurgerPane extends Component {
   

//   render(){
    
//     let burgerIngredients = this.props.burger.map((burgerIngredient, i) => {
        
//         return <div style={{background: burgerIngredient.color}} key={`burgerIngredient${i}`}>{burgerIngredient}</div>
//     })
//     console.log(burgerIngredients)
//     return(
//       <>
//         <h1>Burger Pane</h1>
//         <div className='burgcontainer'>
//             {burgerIngredients}
//         </div>
//         <button onClick={this.props.clear}>Clear</button>
//       </>
//     )
//   }
// }