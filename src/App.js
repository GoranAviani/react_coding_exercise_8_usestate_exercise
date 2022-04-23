import React, {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(0)

    const onButtonAddOne = () => {
        setCounter(counter + 1)
    };

    const onButtonReset = () => {

    };

    return (
        <div>
            App
            <button onClick={onButtonAddOne}>Add +1</button>
            <button onClick={onButtonReset}>Add +1</button>

            <h1>Current count: {counter}</h1>
        </div>
    )
}

export default App