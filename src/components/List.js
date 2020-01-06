import React from 'react';
import { Checkbox } from './Checkbox';

export const ListItem = (props) => {
    const itemClass = () => {
        let result = `list-item ${(props.isActiveItem && props.isActiveItem(props.item)) ? 
            'list-item active' : 'list-item'} ${props.onItemClick ? 'clickable' : ''}`
        return result.trim()
    }

    return (
        <div onClick={() => props.onItemClick ? props.onItemClick() : {}} 
            className={itemClass()}>
            <div className="list-item__left-side">
                {props.checkbox ? <Checkbox/> : ''}
                {props.item[props.itemTitle] ? props.item[props.itemTitle] : props.item}
            </div>
            <div className="list-item__right-side">
                {props.children}
            </div>
        </div>
    )
}

export const List = (props) => {
    const listClass = () => {
        let result = `list ${props.dense ? 'dense' : ''} ${props.dark ? 'dark' : ''}`
        return result.trim()
    }

    return (
        <div className={listClass()}>
            {props.listTitle ? <div className="list-title">{props.listTitle}</div> : ''}
            {props.children ? props.children :
                props.items.map((item, index) => 
                    <ListItem key={index}
                        isActiveItem={props.isActiveItem}  
                        checkbox={props.checkbox}
                        onItemClick={() => props.onItemClick(item)}
                        itemTitle={props.itemTitle} 
                        item={item}/>)}
        </div>
    )
}


