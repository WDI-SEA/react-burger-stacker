import Ingredients from './Ingredients'

const BurgerStack = ({ burgerStack }) => {
  const randNum = () => {
    return Math.floor(Math.random() * 10000)
  }

  const burger = burgerStack.map(ingredient => {
    const { name, color } = ingredient

    let newKey = randNum()

    return <Ingredients key={newKey} name={name} color={color} />
  })
  return <div>{burger}</div>
}

export default BurgerStack
