import BurgerIng from './BurgerIng';

function BurgerStack(props) {

        const burger = props.burgerArray.map((ingredient, index, arr) => {
            return ( 
                <BurgerIng
                    isTop = {index === 0? true : false}  
                    isBottom = {index === arr.length - 1? true : false}
                    checkBun={props.checkBun}
                    ingredientName={ingredient.name}
                    ingredientColor={ingredient.color}
                    key={`ingredientKey${index}`}
                />
            )
        })
        return (
            <div>
                {burger}
            </div>
        );
    }
export default BurgerStack