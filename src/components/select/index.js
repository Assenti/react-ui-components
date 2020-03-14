import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Icon, InputField, Dropdown, List, ListItem, Tag } from '../index';
import { CSSTransition } from 'react-transition-group';

const Select = (props) => {
    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selected, setSelected] = useState([]);
    const [index, setIndex] = useState(-1);
    const [focus, setFocus] = useState(false);
    const [search, setSearch] = useState('');
    const [searchFocus, setSearchFocus] = useState(props.searchable ? true : false);
    const inputRef = useRef(null);

    const selectMenuClass = () => {
        let result = '';
        let className = {
            name: 'rui-select',
            maxHeight: props.maxHeight ? 'max-height' : '',
            className: props.className ? props.className : ''
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

    const isSelected = (item) => {
        for (const i of selected) {
            if (i === item) return true;
        }
        return false;
    }

    const isMultiple = () => {
        if (props.multiple && props.childrenKey) return true
        else if (props.multiple && !props.childrenKey) return true
        else return false
    }

    const getItem = (item) => props.itemKey ? item[props.itemKey] : item;

    const handleItemClick = (e, item, index) => {
        if (props.childrenKey && !props.multiple) {
            setSubMenu(true)
            setActiveIndex(index)               
        } else if (isMultiple()) {
            if (isSelected(getItem(item))) {
                setSelected(() => selected.filter(i => i !== getItem(item)))
                props.onSelect(getItem(item), selected.filter(i => i !== getItem(item)))
            } else {
                setSelected([...selected, getItem(item)])
                props.onSelect(getItem(item), [...selected, getItem(item)])
            }
            setTimeout(() => {
                setFocus(false)
            })
        } else if (props.childrenKey && !props.value) {
        } else {
            if (props.onChange) {
                props.onChange(props.returnObject ? item : getItem(item))
            }
            setTimeout(() => {
                setMenu(false)
            })
        }
    }

    const getActiveItem = (item) => {
        if (!props.childrenKey && !props.multiple) {
            if (props.itemKey) {
                return item[props.itemKey] === props.value
            } else {
                return item === props.value
            }
        } else if (isMultiple()) {
            return isSelected(props.itemKey ? item[props.itemKey] : item)
        } else {
            return item[props.childrenKey].includes(props.value)
        }
    }

    const handleCloseOnBlur = (e) => {
        if (props.value && !props.childrenKey) {
            if (e.currentTarget === e.target && !searchFocus) {
                setMenu(false)
                setSubMenu(false)
    
                if (props.searchable) {
                    setSearchFocus(false)
                    setSearch('')
                }
            }
        } else if (props.childrenKey && props.value) {
            setMenu(false)
            setSubMenu(false)
        } 
    }

    const filteredItems = () => {
        if (search) {
            return props.items.filter(item => {
                return props.itemKey ? 
                    item[props.itemKey].toLowerCase().includes(search.toLowerCase()) :
                    item.toLowerCase().includes(search.toLowerCase())
            })
        } else {    
            return props.items
        }
    }

    const selectMultipleItemClass = () => {
        let result = '';
        let className = {
            name: 'rui-select__multiple-items',
            size: props.size && props.size !== 'default' ? props.size : '',
            color: props.color ? props.color : 'primary',
            border: props.borderType && props.borderType !== 'default' ? props.borderType : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handleFocus = (e) => {
        if (e.currentTarget === e.target && !props.disabled) setMenu(true)
    }

    const handleBlur = (e) => {
        if (e.currentTarget === e.target) {
            setMenu(false)
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === 'ArrowDown') setIndex(index + 1)
        else if (e.key === 'ArrowUp') setIndex(index - 1)
        else if (e.key === 'Escape') {
            setMenu(false)
            setSubMenu(false)
        }
    }

    const handleLabelClick = () => {
        if (inputRef) {
            inputRef.current.focus()
            setFocus(true)
        }
    }

    const handleSubItemClick = (e, subItem) => {
        if (props.onChange) props.onChange(subItem)
        setTimeout(() => {
            setMenu(false)
            setSubMenu(false)
        })
    }

    const getValue = () => {
        if (props.itemKey && !!props.returnObject && !props.childrenKey) return props.value[props.itemKey];
        else return props.value
    }

    return (
        <Dropdown
            className={selectMenuClass()}
            closeManaged
            contentMaxHeight={props.maxHeight}
            visible={menu}
            content={
                <div tabIndex={-1} 
                    className="rui-select__menu" 
                    onBlur={handleCloseOnBlur}>
                    {props.searchable && !props.childrenKey ? 
                    <InputField
                        color={props.color ? props.color : 'primary'}
                        prefix={<Icon name="search"/>}
                        value={search}
                        autoFocus
                        placeholder={props.searchPlaceholder ? props.searchPlaceholder : 'Search'}
                        onChange={e => setSearch(e.target.value)}
                        className="full-width pa-5"/> : ''}
                    <List 
                        className="rui-select__list"
                        dark={props.dark} 
                        size={props.size}>
                        {filteredItems().map((item, index) => 
                            <ListItem
                                key={index}
                                color={props.color}
                                tabIndex={index}
                                isActiveItem={getActiveItem(item)}
                                onClick={e => handleItemClick(e, item, index)}
                                checkbox={props.multiple}
                                controls={!props.multiple && props.childrenKey ? 
                                    <Icon
                                        onClick={e => handleItemClick(e, item, index)} 
                                        name="chevron-next" 
                                        className="rui-select__next-icon"/> : ''}
                                item={props.itemKey ? item[props.itemKey] : item}
                                hover>
                                {!props.multiple ? 
                                <CSSTransition
                                    in={subMenu}
                                    timeout={300}
                                    classNames="rui-select__submenu"
                                    unmountOnExit>
                                    <div className="rui-select__submenu">
                                        <List 
                                            dark={props.dark} 
                                            size={props.size}
                                            className="rui-select__submenu-list">
                                            {resolveItemChildren().map((subItem, iterator) => 
                                                <ListItem
                                                    onClick={e => handleSubItemClick(e, subItem)}
                                                    isActiveItem={subItem === props.value}
                                                    key={iterator}
                                                    item={subItem}
                                                    hover/>
                                            )}
                                        </List>
                                    </div>
                                </CSSTransition> : ''}
                            </ListItem>
                        )}
                    </List>
                </div>}
            trigger={
                !props.multiple ? 
                <InputField
                    label={props.label ? props.label : ''}
                    color={props.color ? props.color : 'primary'}
                    suffix={<Icon
                        className="cursor-pointer" 
                        name={menu ? 'chevron-up' : 'chevron-down'} 
                        onClick={() => setMenu(true)}/>}
                    value={getValue()}
                    onKeyUp={handleKeyUp}
                    whiteBackground={props.whiteBackground}
                    size={props.size}
                    borderType={props.borderType}
                    prefix={props.prefix}
                    disabled={props.disabled}
                    onFocus={() => !props.disabled ? setMenu(true) : {}}
                    onBlur={() => (!props.childrenKey && !props.searchable) ? setMenu(false) : {}}
                    readOnly
                    width={props.width}
                    placeholder={props.placeholder}/> : 
                    <div style={{ width: props.width ? props.width : 100 }} 
                        className="rui-select__multiple">
                        {props.label ? 
                            <label
                                className={focus ? `text-${props.color ? props.color : 'primary'}` : ''} 
                                onClick={handleLabelClick}>{props.label}</label> : ''}
                        <div tabIndex={-1}
                            ref={inputRef}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={{ backgroundColor: props.whiteBackground ? '#fff' : '' }} 
                            className={selectMultipleItemClass()}>
                            {props.prefix ? <span className="rui-input-prefix">{props.prefix}</span> : ''}
                            {selected.length > 0 ? 
                                <div className="rui-select__multiple-item">
                                    {selected.map((item, index) => 
                                        <Tag 
                                            key={index} 
                                            small
                                            value={item}
                                            outlined={props.tagOutlined} 
                                            color={props.tagColor}
                                            onClick={(e) => 
                                                handleItemClick(e, props.itemKey ? {[props.itemKey]: item } : item)}
                                            visible={isSelected(item)}
                                            className="ma-1"/>
                                    )}
                                </div> :
                                (props.placeholder ? <div className="rui-select__multiple-placeholder">{props.placeholder}</div> : '')
                            }
                            <span className="rui-input-suffix"><Icon name={menu ? 'chevron-up' : 'chevron-down'}/></span>
                        </div>
                    </div>}/>
    )
}
Select.propTypes = {
    items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string),PropTypes.arrayOf(PropTypes.number),PropTypes.arrayOf(PropTypes.object)]).isRequired,
    itemKey: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    returnObject: PropTypes.bool,
    prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
    searchable: PropTypes.bool,
    searchPlaceholder: PropTypes.string,
    borderType: PropTypes.oneOf([undefined,'default','','tile','rounded','smooth']),
    multiple: PropTypes.bool,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf([undefined,'default','','medium','large']),
    color: PropTypes.oneOf([undefined,'default','','primary','info','success','error']),
    dark: PropTypes.bool,
    tagColor: PropTypes.string,
    tagOutlined: PropTypes.bool,
    whiteBackground: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    childrenKey: PropTypes.string,
    className: PropTypes.string
}
Select.defaultProps = {
    color: 'primary'
}
export default Select;