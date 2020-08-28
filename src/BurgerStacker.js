import React, {useState} from 'react';
import './BurgerStacker.css';
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

function BurgerStacker(props) {
  let [ingredientList, setIngredientList] =  useState(props.ingredients)
  let [burger, setBurger] = useState([])
  let [newIngredient, setNewIngredient] = useState("")
  let [newIngredientColor, setNewIngredientColor] = useState("")
  
  const addToBurger = (e) => {
        let newBurger = [e.target.value, ...burger]
        const leftoverIngredients = ingredientList.filter((ingredients) => {
          let name = e.target.value.split(',')
          return !ingredients.name.includes(name[0])
        })
        setBurger(newBurger)
        setIngredientList(leftoverIngredients)
  }

  const removeFromBurger = (e) => {
    let value = e.target.value.split(',')
    let newIngredient = {name: value[0], color: value[1]}
    let newBurger = burger.filter((ingredients) => {
      return !ingredients.includes(value[0])
    })
    let newIngredientList = [newIngredient, ...ingredientList]
    setBurger(newBurger);
    setIngredientList(newIngredientList)
  }


  let allIngredients = ingredientList.map((ingredient, index) => {
    return <IngredientList key={index} body={ingredient} addToBurger={addToBurger}/>
  })

  let stackedBurger = burger.map((b, i) => {
    return <BurgerPane key={i} body={b} removeFromBurger={removeFromBurger}/>
  })

  const clearBurger = () => {
    setIngredientList(props.ingredients)
    setBurger([])
  }

  const addToIngredientList = (e) => {
    e.preventDefault();
    let newAddedIngredient = {name: newIngredient, color: newIngredientColor}
    let newIngredientList = [newAddedIngredient, ...ingredientList]
    console.log(newIngredientList)
    setIngredientList(newIngredientList);
  }

  return (
    <div>

        <h1>Burger Stacker</h1>
      <div className="burger">
        <div className="ingredientList">
          <h2>Ingredient List</h2>
          <ul>
            {allIngredients}
          </ul>
          <p>Add an Ingredient:</p>
          <form>
            <input 
              type="text" 
              placeholder="Enter Ingredient name here" 
              value={newIngredient}
              onChange={(e)=>setNewIngredient(e.target.value)}
              required
            />
            <br/>
            <input 
              type="text" 
              placeholder="Enter Ingredient color here" 
              value={newIngredientColor}
              onChange={(e)=>setNewIngredientColor(e.target.value)}
            />
            <br/>
            <button 
            type="submit" 
            onClick={addToIngredientList}
            >Add</button>
          </form>
        </div>

        <div className="burgerPane">
          <ul>
            {stackedBurger}
          </ul>
          <h5>.</h5>
          <h4>Burger Stacking Area</h4>
          <button onClick={clearBurger}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default BurgerStacker;
