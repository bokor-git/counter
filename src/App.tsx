import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {

    let [count, setCount] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)


    const changeCount = () => setCount(count + 1)
    const resetCount = () => {setCount(0); setError(false)}

    return (
        <div className="App">
            <Counter count={count}
                     changeCount={changeCount}
                     resetCount={resetCount}
                     error={error}
                     setError={setError}
            />
        </div>
    );
}

export default App;
