import React, { ReactNode, useEffect, useRef } from "react";

import './ModalWindow.scss';

function ModalWindow({ children, onClick }: { children: ReactNode, onClick: () => void }) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
                onClick();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="modal-window">
            <div className="modal-window-form" ref={elementRef}>
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