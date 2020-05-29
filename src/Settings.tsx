import React from "react";

type CounterPropsType = {
    count: number
    changeCount: () => void
    resetCount: () => void
    error: boolean
    setError: (value: boolean) => void
}


export function Settings({count, changeCount, resetCount, error, setError}: CounterPropsType) {




    return <div className="counter">
        <div className="screen-settings">
          <div className="input-settings">  <span>max value:</span>
              <input type="number" step={1}/></div>
           <div className="input-settings"><span>start value:</span>
               <input type="number" step={1}/></div>
        </div>
        <div className="controls">
            <button>SET</button>
        </div>
    </div>

}