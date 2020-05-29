import React from "react";

type ScreenPropsType = {
    count: number
    error:boolean
    starValue:number
}

function Screen({count,error, starValue}:ScreenPropsType) {
    return <div className={`${error?"error-screen":"screen"}`}>{starValue+count}</div>

}

export default Screen