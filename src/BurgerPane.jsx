import Ingredient from './Ingredient';
import Clear from './Clear';

export default function BurgerPane (props) {
  const burger = props.burgerIngredients.map(layer => {
    return <Ingredient ingredient={layer} />
   })
   return (
     <section className='burger-pane'>
       <h1> Burger Pane </h1>
       {burger}
       <Clear clearBurger={props.clearBurger} />
     </section>
   )
}


// import React, { Component } from 'react';
// import Ingredient from './Ingredient';
// import Clear from './Clear';

// class BurgerPane extends Component {
//   render() { 
//     const burger = this.props.burgerIngredients.map(layer => {
//       return <Ingredient ingredient={layer} />
//     })
//     return (
//       <section className='burger-pane'>
//         <h1> Burger Pane</h1>
//         {burger}
//         <Clear clearBurger={this.props.clearBurger}/>
//       </section>
//     );
//   }
// }
 
// export default BurgerPane;

