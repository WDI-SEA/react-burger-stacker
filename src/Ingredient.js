export default function Ingredient(props) {
   const styles = {
            backgroundColor: props.ingredient.color,
            color: props.ingredient.color === '#3F250B' ? 'white' : 'black' 
        }

        return (
            <div 
                style={styles}
                onClick={props.handleIngredientClick ?
                    () => props.handleIngredientClick(props.ingredient) :
                    () => {}
                }
            >
                <p>{props.ingredient.name}</p>
            </div>
        )
    
}