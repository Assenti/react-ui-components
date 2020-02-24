import React, { useState } from 'react';
import { Icon } from '../icon';
import { InputField } from '../input';
import { Dropdown } from '../dropdown';
import { List, ListItem } from '../list';
import { CSSTransition } from 'react-transition-group';

export const Select = (props) => {
    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const selectMenuClass = () => {
        let result = '';
        let className = {
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const subMenuClass = () => {
        let result = '';
        let className = {
            name: 'rui-select__submenu',
            light: props.dark ? 'dark' : 'light',
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const resolveItemChildren = () => {
        if (props.childrenKey) return props.items[activeIndex][props.childrenKey]
        else return []
    }

    const handleItemClick = (item, index) => {
        if (props.childrenKey) {
            setSubMenu(true)
            setActiveIndex(index)               
        } else {
            setMenu(false)
            props.onChange(item)
        }
    }

    const getActiveItem = (item) => {
        if (!props.childrenKey) {
            if (props.itemTitle) {
                return item[props.itemTitle] === props.value
            } else {
                return item === props.value
            }
        } else {
            return item[props.childrenKey].includes(props.value)
        }
    }

    const handleCloseOnBlur = () => {
        if (!props.childrenKey) {
            setMenu(false)
            setSubMenu(false)
        }
    }

    const filteredItems = () => {
        if (props.search) {
            return props.items.filter(item => {
                return props.itemTitle ? 
                    item[props.itemTitle].toLowerCase().includes(props.search.toLowerCase()) :
                    item.toLowerCase().includes(props.search.toLowerCase())
            })
        } else {    
            return props.items
        }
    }

    return (
        <Dropdown
            className={selectMenuClass()}
            closeManaged
            visible={menu}
            content={
                <div tabIndex={-1} 
                    className="rui-select__menu" 
                    onBlur={() => {
                        setMenu(false)
                        setSubMenu(false)
                    }}>
                    {props.searchable && !props.childrenKey ? 
                    <InputField
                        color={props.color ? props.color : 'primary'}
                        prefix={<Icon name="search"/>}
                        value={props.search}
                        onChange={e => props.onSearch(e.target.value)}
                        className="full-width pa-5"/> : ''}
                    <List className="relative" size={props.size ? props.size : ''}>
                        {filteredItems().map((item, index) => 
                            <ListItem
                                key={index}
                                isActiveItem={getActiveItem(item)}
                                onClick={() => handleItemClick(props.itemTitle ? item[props.itemTitle] : item, index)}
                                controls={resolveItemChildren().length > 0 ? 
                                    <Icon name="chevron-next" size={18}/> : ''}
                                item={props.itemTitle ? item[props.itemTitle] : item}
                                hover>
                                <CSSTransition
                                    in={subMenu}
                                    timeout={300}
                                    classNames="rui-select__submenu"
                                    unmountOnExit>
                                    <div className={subMenuClass()}>
                                        <List size={props.size ? props.size : ''}>
                                            {resolveItemChildren().map((subItem, iterator) => 
                                                <ListItem
                                                    onClick={() => {
                                                        props.onChange(subItem)
                                                        setMenu(false)
                                                        setSubMenu(false)
                                                        setActiveIndex(0)
                                                    }}
                                                    isActiveItem={subItem === props.value}
                                                    key={iterator}
                                                    item={subItem}
                                                    hover/>
                                            )}
                                        </List>
                                    </div>
                                </CSSTransition>
                            </ListItem>
                        )}
                    </List>
                </div>}
            trigger={<InputField
                        label={props.label ? props.label : ''}
                        color={props.color ? props.color : 'primary'}
                        suffix={<Icon name={menu ? 'chevron-up' : 'chevron-down'}/>}
                        value={props.value}
                        size={props.size ? props.size : ''}
                        rounded={props.rounded ? props.rounded : false}
                        prefix={props.prefix ? props.prefix : ''}
                        clearable={props.clearable ? props.clearable : false}
                        onClear={props.onClear ? props.onClear() : {}}
                        onFocus={() => setMenu(true)}
                        onBlur={() => props.value ? handleCloseOnBlur() : {}}
                        className="full-width"
                        width={props.width ? props.width : ''}
                        placeholder={props.placeholder}/>}/>
    )
}
