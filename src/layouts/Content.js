import React from 'react';
import { Header } from '../components/Header';

export const Content = (props) => {
    return (
        <div className="content">
            <Header title="My React UI Components"/>
            <div className="content-inner">
                {props.children}
            </div>
        </div>
    )
}
