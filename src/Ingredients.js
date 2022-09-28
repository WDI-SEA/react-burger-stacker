
function Ingredients(props) {
        return (
            <div  className={`ingredient flexItem ${props.ingredient.includes('Bun')? 'clsBun' : ''} ${props.ingredient.includes('Patty')? 'clsPatty' : ''}
            ${props.ingredient.includes('Onion')? 'clsOnion' : ''}`} 
            style={{backgroundColor: props.color}} 
            onClick={props.handleIngredientClick}>
                {props.ingredient}
                
            </div>
        )
    }
export default Ingredients