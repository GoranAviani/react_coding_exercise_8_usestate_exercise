import React, {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(0)

    const onButtonClick = () => {

    };


    return (
        <div>
            App
            <button onClick={onButtonClick}>Button</button>
            <h1>Current count: {counter}</h1>
        </div>
    )
}

export default App