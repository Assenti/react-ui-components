import React from 'react';

export const Card = (props) => {
    const cardClass = () => {
        let result = '';
        let className = {
            card: 'card',
            flat: props.flat ? 'flat' : '',
            dark: props.dark ? 'dark' : '',
            outlined: props.outlined && !props.dark ? 'outlined' : '',
            color: props.color && !props.dark ? props.color : '',
            className: props.className ? props.className : ''
        }

        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={cardClass()} 
            style={{ width: props.width ? props.width : '', minWidth: props.minWidth ? props.minWidth : '' }}>
            {props.title && props.outlined && !props.dark ? <div className="card-title">{props.title}</div> : ''}
            {props.header ? <div className="card-header">{props.header}</div> : ''}
            {props.img ? props.img : ''}
            {props.children}
            {props.footer ? <div className="card-footer">{props.footer}</div> : ''}
        </div>
    )
}
