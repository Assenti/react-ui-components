import React from 'react';

export const Alert = (props) => {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">{props.heading}</div>
                {props.children}
            </div>
        </div>
    )
}
