// FUNCTIONAL VERSION
import { useState } from 'react'
import './App.css'
import IngList from './IngList'
import BurgerPane from './BurgerPane'

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

const App = () => {
    const [clickedIngs, setClickedIngs] =useState([])

    const addToBurger = (e) => {
        const newIng = {name: e.target.innerText, color: e.target.style.backgroundColor}
        const updatedClickedIngs = clickedIngs.concat(newIng)
        setClickedIngs(updatedClickedIngs)
    }

    return (
        <div>
            <h1>Build-a-Burger!</h1>
            <div class="kitchen-box">
                <fieldset class="ing-box">
                    <legend>Ingredients</legend>
                    <IngList ingredients={ingredients} addToBurger={addToBurger} />
                </fieldset>
                <fieldset class="burger-box">
                    <legend>Burger</legend>
                    <BurgerPane clickedIngs={clickedIngs} clearBurger={() => setClickedIngs([])} />
                </fieldset>
            </div>
        </div>
    )
}
export default App

// CLASS-BASED VERSION
// export default class App extends Component {
//     constructor(props) {
//         super()
//         this.state = {
//             clickedIngs: []
//         }
//     }

//     addToBurger = (e) => {
//         // GET NAME/COLOR OF CLICKED INGREDIENT
//         const newIng = {name: e.target.innerText, color: e.target.style.backgroundColor}

//         // CREATE NEW ARRAY WITH CURRENT CLICKED INGS, APPEND NEW INGS
//         const updatedClickedIngs = this.state.clickedIngs.concat(newIng)

//         // SETSTATE WITH NEW INGS
//         this.setState({
//             clickedIngs: updatedClickedIngs
//         })
//     }

//     clearBurger = (e) => {
//         this.setState({
//             clickedIngs: []
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Build-a-Burger!</h1>
//                 <div class="kitchen-box">
//                     <div class="ing-box">
//                         <IngList ingredients={ingredients} addToBurger={this.addToBurger} />
//                     </div>
//                     <div class="burger-box">
//                         <BurgerPane clickedIngs={this.state.clickedIngs} clearBurger={this.clearBurger} />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }