import React from 'react';
import { Icon } from '../icon';

export const List = (props) => {
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

export const ListItem = (props) => {
    const itemClass = () => {
        let result = '';
        let className = {
            item: 'rui-list-item',
            roundedActive: props.roundedActive ? 'rounded' : '',
            right: props.leftBorder ? 'left' : 'right',
            active: props.isActiveItem ? 'active' : '',
            hover: props.hover ? 'hover' : '',
            noDivider: props.noDivider ? '' : 'divider',
            className: props.className ? props.className : ''
        }

        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div onClick={() => props.onClick ? props.onClick() : {}} 
            className={itemClass()}>
            {
                !props.render ?
                <React.Fragment>
                    <div className="rui-list-item__left-side">
                        <div className="rui-list-item__title-row">
                            {props.icon ? <Icon name={props.icon}/> : ''}
                            {props.checkbox}
                            {props.item}
                        </div>
                        {props.subTitle ? <div className="rui-list-subtitle">{props.subTitle}</div> : ''}
                    </div>
                    <div className="rui-list-item__right-side">
                        {props.controls}
                    </div>
                </React.Fragment> :
                props.render
            }
        </div>
    )
}


