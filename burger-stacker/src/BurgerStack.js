import Ingredient from './Ingredient'

function BurgerStack(props){
    console.log(props)
    let burgerIngredients = props.burgerIngredients.map((item, i) => (<Ingredient ingredient={item.name}/>
        )) 
        return (
            <div>
            <h3>Make that burger</h3>
            <ul>
                {burgerIngredients}
            </ul>
            </div>
        )
}

export default BurgerStack