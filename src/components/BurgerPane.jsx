import BurgerStack from './childComponents/BurgerStack'

const BurgerPane = ({ burgerStack, clearBurger }) => {
  return (
    <div>
      <h1>Your Burger</h1>
      <div className='burgerStackFlex'>
        <BurgerStack burgerStack={burgerStack} />
        <button className='clearBtn' onClick={clearBurger}>
          Clear Burger
        </button>
      </div>
    </div>
  )
}

export default BurgerPane
