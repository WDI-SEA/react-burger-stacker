
import Ingredient from './Ingredient';
import Clear from './Clear'

export default function BurgerPane({burgerIngredients, clearBurger}) {
      const burger = burgerIngredients.map(layer=>{
      return <Ingredient ingredient={layer} />
    })
    return (
        <section className="burger-pane">
            <h1>Burger Pane</h1>
            {burger}
            <Clear clearBurger={clearBurger} />
        </section>
    )
  }



// class BurgerPane extends Component {
//   render() {
//     const burger = this.props.burgerIngredients.map(layer=>{
//       return <Ingredient ingredient={layer} />
//     })
//     return (
//         <section className="burger-pane">
//             <h1>Burger Pane</h1>
//             {burger}
//             <Clear clearBurger={this.props.clearBurger} />
//         </section>
//     )
//   }
// }

// export default BurgerPane;