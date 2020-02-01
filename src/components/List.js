import React from 'react';
import { Icon } from './Icon';

export const List = (props) => {
    const listClass = () => {
        let result = '';
        let className = {
            list: 'list',
            dense: props.dense ? 'dense' : '',
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
            {props.header ? <div className="list-header">{props.header}</div> : ''}
            {props.children}
        </div>
    )
}

export const ListItem = (props) => {
    const itemClass = () => {
        let result = '';
        let className = {
            item: 'list-item',
            active: (props.isActiveItem && props.isActiveItem(props.item)) ? 'active' : '',
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
        <div onClick={() => props.onItemClick ? props.onItemClick() : {}} 
            className={itemClass()}>
            <div>
                <div className="row align-center">
                    {props.icon ? <Icon name={props.icon}/> : ''}
                    <div className="list-item__left-side">
                        {props.checkbox}
                        {props.item[props.itemTitle] ? props.item[props.itemTitle] : props.item}
                    </div>
                </div>
                <div className="list-item__right-side">
                    {props.controls}
                </div>
            </div>
            {props.subTitle ? <div className="list-subtitle">{props.subTitle}</div> : ''}
        </div>
    )
}


