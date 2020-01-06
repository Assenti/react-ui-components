import React from 'react';
import { Checkbox } from './Checkbox';

export const List = (props) => {
    const listClass = () => {
        let result = `list ${props.dense ? 'dense' : ''} ${props.dark ? 'dark' : ''}`
        return result.trim()
    }

    const itemClass = (item) => {
        let result = `list-item ${(props.isActiveItem && props.isActiveItem(item)) ? 
            'list-item active' : 'list-item'} ${props.onItemClick ? 'clickable' : ''}`
        return result.trim()
    }

    return (
        <div className={listClass()}>
            {props.listTitle ? <div className="list-title">{props.listTitle}</div> : ''}
            {props.items.map((item, index) => 
                <div key={index}
                    onClick={() => props.onItemClick ? props.onItemClick() : {}} 
                    className={itemClass(item)}>
                    <div className="list-item__left-side">
                        {props.checkbox ? <Checkbox/> : ''}
                        {item[props.itemTitle] ? item[props.itemTitle] : item}
                    </div>
                    <div className="list-item__right-side">
                        {props.children}
                    </div>
                </div>
            )}
        </div>
    )
}
