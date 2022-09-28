
function BurgerIng(props) {

        return (
            <div className={`ingredient 
            ${props.isTop === true && props.ingredientName.includes('Bun')? 'clsBunTop' : ''} 
            ${props.isBottom === true && props.ingredientName.includes('Bun')? 'clsBunBtm' : ''} 
            ${props.ingredientName.includes('Patty')? 'clsPatty' : ''}
            ${props.ingredientName.includes('Onion')? 'clsOnion' : ''}`} 
             style={{backgroundColor: props.ingredientColor}}>
                {props.ingredientName}
            </div>
        )
    }
export default BurgerIng