import React from 'react';

const List = (props) => {
    const listClass = () => {
        let result = '';
        let className = {
            list: 'rui-list',
            size: props.size ? props.size : '',
            dark: props.dark ? 'dark' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={listClass()}>
            {props.header ? <div className="rui-list-header">{props.header}</div> : ''}
            {props.children}
        </div>
    )
}

export default List;


