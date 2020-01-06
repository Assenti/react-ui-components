import React from 'react';
import reactLogo from '../img/logo.svg';

export const Header = (props) => {
    return (
        <div className="header">
            <div className="header-left">
                <img className="header-logo" src={reactLogo} alt="React logo"/>
                <div className="header-title">{props.title}</div>
            </div>
            <div className="header-right"></div>
        </div>
    )
}
