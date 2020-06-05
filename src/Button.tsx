import React from "react";

type ButtonPropsType = {
    onClick: () => void
    disabled: boolean
    title: string
}

export function Button({title, disabled, onClick}: ButtonPropsType) {
    return <button disabled={disabled} onClick={onClick}>{title}</button>
}