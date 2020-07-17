import React, {useState} from 'react'
import BurgerPane from './BurgerPane'

const IngredientList = (props) => {

    
    const [toppins,setAdded] = useState(["plate"])



    const handleClick = (i) => {
        setAdded([i, ...toppins])
        // console.log(toppins)
        // setAdded(isAdded)
        console.log(toppins)

        // toppins.push(list)
    }
    
    let list = props.ingredients.map((item) => {
        return (
                <li name={item.name} key={item.name}>
                    {item.name}
                    <input type="button" value={item.name} onClick={() => {handleClick(item.name)}} />
                </li> 
            )
            })        
    
            function burg(b) {b.map((item) => {
                return (
                        <li name={item.name}>
                            {item}
                        </li> 
                    )
                    })
                }
  
    
    

    return (
        <div className="ingredient-list">
            <h1>BURGS</h1>
            {list}
            {/* {toppins} */}
            <BurgerPane toppins={toppins} />
        </div>
    );
}

export default IngredientList


