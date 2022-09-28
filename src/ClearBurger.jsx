import './App.css';


function ClearBurger(props) {
    return (
      <div>
        <button onClick={props.handleBurgerClear}> Clear </button>
      </div>
    )
  }


export default ClearBurger;