import React, { useState } from 'react';

import { ChevronNext, ChevronDown } from '../icons/index';

export const Select = ({ 
    items, 
    filterItems, 
    filterProp, 
    itemName, 
    subItemName, 
    labelName, 
    placeholder, 
    children, 
    addClass,
    selectedItem,
    normalTitle,
    onSelect,
    width,
    subTitle,
    addSubItem
}) => {

    const [open, setOpen] = useState(false)

    const getItems = () => {
        return items ? items : []
    }

    const getFilterItems = () => {
        return filterItems ? filterItems : []
    }

    const subItems = (parent) => {
        return getFilterItems().filter(item => filterProp ? item[filterProp] === parent : item === parent)
    }

    const openMenu = e => {
        if (e.target === e.currentTarget) {
            setOpen(true)
        }
    }

    const handleSelect = (e, value) => {
        if (e.target === e.currentTarget) {
            if (onSelect) onSelect(value)
            setOpen(false)
        }
    }

    const closeMenu = () => {
        if (children) {
            setOpen(false)
        }
    }

    const cutLongText = (text) => {
        if (text.length > 130) return `${text.slice(0, 130)}...`
        else return text
    }

    const isOriginContent = () => {
        if (children) {
            return children
        } else {
            return (
                <div>
                    {getItems().map((item, index) => 
                        <div key={index} className="select-menu__item">
                            {itemName ? item[itemName] : item}
                            <ChevronNext 
                                size={14}
                                onClick={openMenu} 
                                color={subItems(item).length > 0 ? '' : '#eee'}/>
                            {subItems(item).length > 0 ? 
                            <div className="select-menu__subitems">
                                {subTitle ? <div className="select-menu__subitem-title">{item}</div> : ''}
                                {subItems(item).map((subItem, subIndex) => 
                                    <div key={subIndex} 
                                        className="select-menu__subitem"
                                        onClick={e => handleSelect(e, subItemName ? subItem[subItemName] : subItem)}>
                                        {subItemName ? subItem[subItemName] : subItem} {addSubItem ? ' (' + subItem[addSubItem] + ')' : ''}
                                    </div>
                                )}
                            </div> : ''}
                        </div>
                    )}
                </div>
            )
        }
    }

    return (
        <div className="select-menu"
            style={{ width: width ? width+'px' : '' }} 
            tabIndex={-1} 
            onClick={openMenu} 
            onBlur={() => setOpen(false)}>
            {labelName ? <label>{labelName}</label> : ''}
            {!cutLongText(selectedItem ? selectedItem : '') ? 
            <span className={normalTitle ? 'normal' : ''} 
                onClick={openMenu}>{placeholder}</span> : ''}
            <ChevronDown size={12}/>
            {cutLongText(selectedItem ? selectedItem : '') ? 
                <div className={normalTitle ? 'select-menu__value normal' : 'select-menu__value'} 
                    onClick={openMenu} title={selectedItem}>{selectedItem ? cutLongText(selectedItem) : ''}</div> : ''}
            {open ? 
                <div className={"select-menu__items " + addClass} onClick={closeMenu}>
                {isOriginContent()}
            </div> : ''}
        </div>
    )
}
