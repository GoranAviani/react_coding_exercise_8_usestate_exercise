import React, {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(0)

    const onButtonClick = () => {
        setCounter(counter+1)
    };


    return (
        <div>
            App
            <button onClick={onButtonClick}>Add +1</button>

            <h1>Current count: {counter}</h1>
        </div>
    )
}

export default App