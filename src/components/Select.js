import React, { useState, useRef } from 'react';
import { ChevronNext, ChevronDown } from '../icons/index';
import { CSSTransition } from 'react-transition-group';

export const Select = ({ 
    items, 
    itemName,
    subItemsField, 
    subItemName, 
    labelName, 
    placeholder, 
    addClass,
    selectedItem,
    normalTitle,
    onSelect,
    width,
    subTitle,
    addSubItem,
    showSubItemOnly,
    hint
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
        console.log(value, subValue)
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
        let classes = {
            normalTitle: normalTitle ? 'normal' : '',
            active: isSelected ? 'active' : ''
        }
        return `select-menu__item ${classes.normalTitle} ${classes.active}`
    }

    const selectSubItemClass = (item) => {
        let selected = showSubItemOnly ? selectedItem : (selectedItem ? selectedItem.split('/')[1].trim() : '')
        let isSelected = subItemName ? item[subItemName] === selected : item === selected
        let classes = {
            normalTitle: normalTitle ? 'normal' : '',
            active: isSelected ? 'active' : ''
        }
        return `select-menu__subitem ${classes.normalTitle} ${classes.active}`
    }

    return (
        <div className="select-menu"
            ref={selectMenu}
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

            <CSSTransition
                in={open}
                timeout={300}
                classNames="select-menu"
                unmountOnExit>
                <div className={"select-menu__items " + addClass}>
                    {getItems().map((item, index) => 
                        <div key={index} 
                            className={selectItemClass(item)}
                            onClick={e => subItems(item).length > 0 ? {} : handleSelect(e, itemName ? item[itemName] : item)}>
                            {itemName ? item[itemName] : item}
                            {subItems(item).length > 0 ? <ChevronNext size={14}/> : ''}
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
            {hint ? <div className="select-menu__hint">{hint}</div> : ''}
        </div>
    )
}
