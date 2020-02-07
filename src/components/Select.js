import React, { useState, useRef } from 'react';
import { ChevronNext, ChevronDown } from '../icons/index';
import { CSSTransition } from 'react-transition-group';
import { Icon } from './Icon';

export const Select = ({ 
    items, 
    itemName,
    subItemsField, 
    subItemName, 
    labelName, 
    placeholder, 
    selectedItem,
    onSelect,
    width,
    minWidth,
    subTitle,
    addSubItem,
    showSubItemOnly,
    color,
    size,
    rounded
}) => {
    const selectMenu = useRef(null);
    const [open, setOpen] = useState(false);
    const getItems = () => items ? items : [];

    const subItems = (parent) => {
        if (subItemsField) return parent[subItemsField]
        else return []
    }

    const openMenu = e => {
        if (e.target === e.currentTarget) setOpen(true)
    }

    const handleSelect = (e, value, subValue) => {
        if (e.target === e.currentTarget) {
            let result = subValue ? (showSubItemOnly ? subValue : `${value} / ${subValue}`) : value
            onSelect(result)
            setOpen(false)
            selectMenu.current.blur()
        }
    }

    const cutLongText = (text) => {
        if (text.length > 130) return `${text.slice(0, 130)}...`
        else return text
    }

    const selectItemClass = (item) => {
        let isSelected = itemName ? item[itemName] === selectedItem : item === selectedItem
        let result = '';
        let className = {
            item: 'select-menu__item',
            active: isSelected ? 'active' : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const selectSubItemClass = (item) => {
        let selected = showSubItemOnly ? selectedItem : (selectedItem ? selectedItem.split('/')[1].trim() : '')
        let isSelected = subItemName ? item[subItemName] === selected : item === selected
        let classes = {
            active: isSelected ? 'active' : ''
        }
        return `select-menu__subitem ${classes.normalTitle} ${classes.active}`
    }

    const selectClass = (item) => {
        let result = '';
        let className = {
            main: 'select-menu',
            rounded: rounded ? 'rounded' : '',
            size: size ? size : '',
            color: color ? color : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <React.Fragment>
            {labelName ? <label className="select-menu__label">{labelName}</label> : ''}
            <div className={selectClass()}
                ref={selectMenu}
                style={{ width: width ? width : '', minWidth: minWidth ? minWidth : '' }} 
                tabIndex={-1} 
                onClick={openMenu} 
                onBlur={() => setOpen(false)}>
                
                {!cutLongText(selectedItem ? selectedItem : '') ? 
                <span onClick={openMenu}>{placeholder}</span> : ''}
                {cutLongText(selectedItem ? selectedItem : '') ? 
                    <div className="select-menu__value" 
                        onClick={openMenu} 
                        title={selectedItem}>
                            {selectedItem ? cutLongText(selectedItem) : ''}
                    </div> : ''}
                <Icon name="chevron-down"/>
                
                <CSSTransition
                    in={open}
                    timeout={300}
                    classNames="select-menu"
                    unmountOnExit>
                    <div className="select-menu__items">
                        {getItems().map((item, index) => 
                            <div key={index} 
                                className={selectItemClass(item)}
                                onClick={e => subItems(item).length > 0 ? {} : handleSelect(e, itemName ? item[itemName] : item)}>
                                {itemName ? item[itemName] : item}
                                {subItems(item).length > 0 ? <Icon name="chevron-next"/> : ''}
                                {subItems(item).length > 0 ? 
                                    <div className="select-menu__subitems">
                                        {subTitle ? <div className="select-menu__subitem-title">{itemName ? item[itemName] : item}</div> : ''}
                                        {subItems(item).map((subItem, subIndex) => 
                                            <div key={subIndex} 
                                                className={selectSubItemClass(subItem)}
                                                onClick={e => handleSelect(e, itemName ? item[itemName] : item, subItemName ? subItem[subItemName] : subItem)}>
                                                {subItemName ? subItem[subItemName] : subItem} {addSubItem ? ' (' + subItem[addSubItem] + ')' : ''}
                                            </div>
                                        )}
                                    </div> : ''
                                }
                            </div>
                        )}
                    </div>
                </CSSTransition>
            </div>
        </React.Fragment>
    )
}
