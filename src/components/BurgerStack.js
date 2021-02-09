import Ingredients from './Ingredients'

function BurgerStack(props) {
    console.log(props.addedIngredients, 'added Ing from pane')
    let order = props.addedIngredients.map((ing, i) => {
        return <li key={`ing-key=${i}`}><Ingredients ingredient={ing} /></li>
    })
    return (
        <div>
            <h3>Your burger here</h3>
            <ul className='burger'>
                {order}
            </ul>
        </div>
    )
}

export default BurgerStack