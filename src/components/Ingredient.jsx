const Ingredient = ({ingredient, isStacked, addToStack}) => {

    return(
        <div style={{backgroundColor: ingredient.color}}>
            <p> {ingredient.name}</p>
        {
            isStacked ? null
            :
            <input 
            type="submit" 
            value="Stack!"  
            onClick={() => {addToStack(ingredient)}}
            />                    
        }
            <hr />
        </div>
    )
}

 
export default Ingredient;