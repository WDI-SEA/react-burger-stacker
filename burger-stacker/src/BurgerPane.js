import React, { useState } from 'react';
import BurgerStack from './BurgerStack';
import ClearStack from './ClearStack'

function BurgerPane (props) {
    return (
        <div>
            <BurgerStack ingredients={props.ingredients} />
            <ClearStack ClearStack={props.clearStack} />
        </div>
    );
};

export default BurgerPane;