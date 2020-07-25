import React, {} from 'react';

// if i had more time to think this through slowly and methodically,
// i'd put all the ingredients in an array and use map

const Tomato = () => {
    const handleClick = () => {
        console.log("I DON'T KNOW WHAT I'M DOING")
        // move to the burger component. push it to an array that displays in burger?
    }

    return (
        <div>
            <form>
                <button onClick={() => handleClick()}>Tomato</button>
            </form>
        </div>
    )
}

const Onion = () => {
    const handleClick = () => {
        console.log("I DON'T KNOW WHAT I'M DOING")
        // move to the burger component
    }

    return (
        <div>
            <form>
                <button onClick={() => handleClick()}>Onion</button>
            </form>
        </div>
    )
}

const Lettuce = () => {
    const handleClick = () => {
        console.log("I DON'T KNOW WHAT I'M DOING")
        // move to the burger component
    }

    return (
        <div>
            <form>
                <button onClick={() => handleClick()}>Lettuce</button>
            </form>
        </div>
    )
}

const Pickle = () => {
    const handleClick = () => {
        console.log("I DON'T KNOW WHAT I'M DOING")
        // move to the burger component
    }

    return (
        <div>
            <form>
                <button onClick={() => handleClick()}>Pickle</button>
            </form>
        </div>
    )
}

const Ketchup = () => {
    const handleClick = () => {
        console.log("I DON'T KNOW WHAT I'M DOING")
        // move to the burger component
    }

    return (
        <div>
            <form>
                <button onClick={() => handleClick()}>Ketchup</button>
            </form>
        </div>
    )
}

const Mustard = () => {
    const handleClick = () => {
        console.log("I DON'T KNOW WHAT I'M DOING")
        // move to the burger component
    }

    return (
        <div>
            <form>
                <button onClick={() => handleClick()}>Mustard</button>
            </form>
        </div>
    )
}

const SecretSauce = () => {
    const handleClick = () => {
        console.log("I DON'T KNOW WHAT I'M DOING")
        // move to the burger component
    }

    return (
        <div>
            <form>
                <button onClick={() => handleClick()}>Secret Sauce</button>
            </form>
        </div>
    )
}

const Ingredient = () => {
        return (
            <div>
                <Tomato />
                <Onion />
                <Lettuce />
                <Pickle />
                <Ketchup />
                <Mustard />
                <SecretSauce />
            </div>
        );
}

export default Ingredient;