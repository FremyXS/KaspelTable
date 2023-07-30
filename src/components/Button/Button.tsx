import React, { ReactNode } from "react";

import './Button.scss';

interface IButton {
    children: ReactNode,
    type: "button" | "submit" | "reset" | undefined
}

function Button({ children, type }: IButton) {
    return (
        <div className="component-button">
            <button type={type}>
                {children}
            </button>
        </div>
    );
}

export default Button;