import React, { useState } from 'react';
import Ingredient from "./Ingredient";
import CurrentStack from './CurrentStack'

function BurgerStack(props) {
    return (
        <div class="stack">
            <CurrentStack ingredients={props.ingredients} />
        </div>
    );
}

export default BurgerStack;