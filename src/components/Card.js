import React from 'react';

export const Card = (props) => {
    const cardClass = () => {
        let result = '';
        let className = {
            card: 'card',
            flat: props.flat ? 'flat' : ''
        }

        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={cardClass()} style={{ width: props.width ? props.width : '' }}>
            {props.header ? <div className="card-header">{props.header}</div> : ''}
            {props.img ? <img src={props.img} alt={props.desc ? props.desc : 'Image'}/> : ''}
            {props.children}
            {props.footer ? <div className="card-footer">{props.footer}</div> : ''}
        </div>
    )
}