export default function Ingredient (props) {
    return (
      <>
        <div
          className='ingredient'
          style={{ background: props.ingredientColor }}
          onClick={() => {props.addToBurger(props.ingredientName,props.ingredientColor)}}
          >
          {props.ingredientName}
        </div>
        
      </>
    )
  }
  