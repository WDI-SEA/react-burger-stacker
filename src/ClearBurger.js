import React from 'react';

function ClearBurger(props) {
  return (
    <div>
      <button onClick={(e) => props.action(e)}>
        Eat me!
      </button>
    </div>
  )
}

export default ClearBurger;