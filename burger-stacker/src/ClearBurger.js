import React, { useEffect, useState } from 'react';

const ClearBurger = props => {
        return(
            <div>
                <button onClick={props.clear}>Clear Burger</button>
            </div>
        )
    }


export default ClearBurger