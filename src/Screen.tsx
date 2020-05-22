import React from "react";

type ScreenPropsType = {
    count: number
    error:boolean
}

function Screen({count,error}:ScreenPropsType) {
    return <div className={`screen ${error?"error":""}`}>{count}</div>

}

export default Screen