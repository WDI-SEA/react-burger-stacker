import React, {useState} from 'react'
import BurgerPane from './BurgerPane'

const IngredientList = (props) => {

    const initialState = ["Plate"]
    const [toppins,setAdded] = useState(initialState)



    const handleClick = (i) => {
        setAdded([i, ...toppins])
        // setAdded(i.concat(toppins))
        // console.log(toppins)
        // setAdded(isAdded)
        console.log(toppins)

        // toppins.push(list)
    }

    const clearClick = () => {
        setAdded(initialState)
    }
    
    let list = props.ingredients.map((item) => {
        return (
                <li name={item.name} key={item.name}>
                    {item.name}
                    <input type="button" value={item.name} onClick={() => {handleClick(item.name)}} />
                </li> 
            )
            })        
    
            
            
            
            // function burg(b) {b.map((item) => {
            //     return (
            //             <li name={item.name}>
            //                 {item}
            //             </li> 
            //         )
            //         })
            //     }

    return (
        <div className="ingredient-list">
            <h1>BURGS</h1>
            {list}
            <input type="button" class="btn" value="clear plate" onClick={() => {clearClick()}} />
            {/* {toppins} */}
            <div className="burgerBox">
                <BurgerPane toppins={toppins} />
            </div>
        </div>
    );
}

export default IngredientList


