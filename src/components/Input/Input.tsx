import React from "react";

import './Input.scss';

interface IInput {
    labelName: string
}

function Input({ labelName }: IInput) {
    return (
        <div className="component-input">
            <span className="component-input__label">
                {labelName}
            </span>
            <input type="text" />
        </div>
    )
}

export default Input;