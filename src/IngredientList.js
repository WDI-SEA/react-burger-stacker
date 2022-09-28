import Ingredients from './Ingredients'

function IngredientList(props) {

    const burgerIng = props.ingredients.map((bing, i) => {
        return <Ingredients key={`toppingKey${i}`} ingredient={bing.name} color={bing.color} 
        handleIngredientClick={props.handleIngredientClick}
        />
    })
    
    return (
            <div className='ingCtn'>
                {burgerIng}
            </div>
        )
    }
export default IngredientList