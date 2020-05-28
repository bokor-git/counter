import React from "react";

type ScreenPropsType = {
    count: number
    error:boolean
}

function Screen({count,error}:ScreenPropsType) {
    return <div className={`${error?"error-screen":"screen"}`}>{count}</div>

}

export default Screen