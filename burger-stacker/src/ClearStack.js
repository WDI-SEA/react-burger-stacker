import React, { useState } from 'react'

function ClearStack(props) {
    return(
        <button onClick={(e) => props.ClearStack()}>Clear</button>
    )
}

export default ClearStack;