import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Menu = (props) => {
    const menuClass = () => {
        let result = '';
        let className = {
            menu: 'menu-container',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handleSelect = (item) => {
        props.onClose()
        props.onSelect(item)
    }
    return (
        <div className={menuClass()} 
            tabIndex={-1}
            onBlur={() => props.onClose()}>
            {props.trigger}
            <CSSTransition
                in={props.visible}
                timeout={300}
                classNames="menu"
                unmountOnExit>
                <div className="menu">
                    {props.title ? <div className="menu-title">{props.title}</div> : ''}
                    {props.items.map((item, index) => 
                        <div key={index} 
                            className="menu-item" 
                            onClick={() => handleSelect(props.itemTitle ? item[props.itemTitle] : item)}>
                                {props.itemTitle ? item[props.itemTitle] : item}</div>
                    )}
                </div>
            </CSSTransition>
        </div>
    )
}
