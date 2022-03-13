import Ingredient from "./Ingredient"

export default function IngredientList(props) {
    const ingredientList = props.ingredientsList.map(i => {
        return (<Ingredient 
                    ingredientName={i.name}
                    ingredientColor={i.color}
                    addToBurger={props.addToBurger}                    
                />)
    })
    return (
        <>
        <section className='ingredient-list'>
                <h3>Ingredient List</h3>
                {ingredientList}
                </section>     
        </>
    )
}