import React, { ReactNode } from "react";

import './ModalWindow.scss';

function ModalWindow({ children, onClick }: { children: ReactNode, onClick: () => void }) {
    return (
        <div className="modal-window">
            <div className="modal-window-form">
                <div className="modal-window-form__head">
                    <p>Kaspel</p>
                    <button type="button" onClick={onClick}>Exit</button>
                </div>
                <div className="modal-window-form__body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;