import React from 'react';

export const Header = (props) => {
    return (
        <div className="header">
            <div className="header-left">
                {props.imgPath ? 
                <img className="header-logo" src={props.imgPath} alt="React logo"/> : ''}
                <div className="header-title">{props.title}</div>
            </div>
            <div className="header-right">
                {props.rightSide}
            </div>
        </div>
    )
}
