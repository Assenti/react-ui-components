import React from 'react';

const Card = (props) => {
    const cardClass = () => {
        let result = '';
        let className = {
            card: 'rui-card',
            flat: props.flat ? 'flat' : '',
            dark: props.dark ? 'dark' : '',
            hover: props.hover ? 'hover' : '',
            outlined: props.outlined && !props.dark ? 'outlined' : '',
            color: props.color && !props.dark ? props.color : 'gray',
            className: props.className ? props.className : ''
        }

        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={cardClass()}
            ref={props.setRef} 
            style={{ width: props.width ? props.width : '', minWidth: props.minWidth ? props.minWidth : '' }}>
            {props.title && props.outlined && !props.dark ? <div className="rui-card-title">{props.title}</div> : ''}
            {props.header ? <div className="rui-card-header">{props.header}</div> : ''}
            {props.img ? props.img : ''}
            {props.children}
            {props.footer ? <div className="rui-card-footer">{props.footer}</div> : ''}
        </div>
    )
}

export default Card;