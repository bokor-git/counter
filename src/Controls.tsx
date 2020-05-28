import React from "react";


type ControlsPropsType = {
    changeCount: ()=>void
    resetCount:()=>void
    error: boolean
    count: number
}

function Controls({changeCount, resetCount, error,count}:ControlsPropsType) {
    return <div className="controls">
        <button disabled={count===5} onClick={changeCount}>INC</button>
        <button disabled={count===0} onClick={resetCount}>RESET</button>
    </div>

}

export default Controls