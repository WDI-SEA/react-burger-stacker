import React, {useState} from 'react'
// import BurgerPane from './BurgerPane'

const IngredientList = (props) => {

    // const initialState = ["Plate"]
    // const [toppins,setAdded] = useState(initialState)

    // useLayoutEffect (() => {
    //     console.log(toppins)
    // },
    // [toppins])

    // const initialState = ["plate"]

    // const addToStack = (e, props) => {
    //     console.log(props.toppins)
    //     // props.setToppins(e, ...props.toppins)
    // }
    
    // const clearClick = () => {
    //     props.setToppins(initialState)
    // }
    
    let list = props.ingredients.map((item) => {
        return (
                <li name={item.name} key={item.name}>
                    {item.name}
                    <input type="button" value={item.name} onClick={(e) => props.action(item.name)} />
                </li> 
            )
            })        
    
    

    return (
        <div className="ingredient-list">
            <h1>BURGS</h1>
            {/* clearButton */}
            {list}
            
            {/* {toppins} */}
            {/* <div className="burgerBox"> */}
                {/* <BurgerPane toppins={toppins} /> */}
                {/* <IngredientList ingredients={ingredients}/> */}
            {/* </div> */}
        </div>
    );
}

export default IngredientList