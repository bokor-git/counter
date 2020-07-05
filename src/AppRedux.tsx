import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function AppRedux() {

//=================> Settings Error State
    let [inputValueError, setInputValueError] = useState<boolean>(false)

    return (
        <div className="App">
            <Counter inputValueError={inputValueError}/>
            <Settings
                inputValueError={inputValueError}
                setInputValueError={setInputValueError}
            />
        </div>
    );
}

export default AppRedux;
