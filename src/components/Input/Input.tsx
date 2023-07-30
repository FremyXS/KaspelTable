import React, { ChangeEvent } from "react";

import './Input.scss';

interface IInput {
    type: React.HTMLInputTypeAttribute | undefined
    labelName: string,
    name: string,
    value: string | number | readonly string[] | undefined,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void 
}

function Input({ type, labelName, name, value, onChange }: IInput) {
    return (
        <div className="component-input">
            <span className="component-input__label">
                {labelName}
            </span>
            <input type={type} name={name} value={value}
            onChange={onChange} />
        </div>
    )
}

export default Input;