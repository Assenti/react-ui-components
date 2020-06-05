import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon, InputField, Dropdown, List, Tag } from '../index';
import { strinfigyClassObject } from '../utils';

const Select = (props) => {
    const checkboxesContainer = useRef();
    const [menu, setMenu] = useState(false);
    const [selected, setSelected] = useState([]);
    const [index, setIndex] = useState(-1);
    const [focus, setFocus] = useState(false);
    const [search, setSearch] = useState('');

    let className = {
        name: 'rui-select',
        maxHeight: props.maxHeight ? 'max-height' : '',
        className: props.className ? props.className : ''
    }

    let classNameMultiple = {
        name: 'rui-select__multiple-items',
        size: props.size && props.size !== 'default' ? props.size : '',
        disabled: props.disabled ? 'disabled' : '',
        color: props.color ? props.color : 'primary',
        border: props.borderType && props.borderType !== 'default' ? props.borderType : ''
    }

    const handleClick = (e) => {
        if (checkboxesContainer.current && checkboxesContainer.current.contains(e.target)) return;
        setMenu(false)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick, true);

        return () => {
            document.removeEventListener("mousedown", handleClick, true);
        }
    },[])

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

    const handleItemClick = (item) => {
        if (isMultiple()) {
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

    const handleKeyUp = (e) => {
        if (e.key === 'ArrowDown') setIndex(index + 1)
        else if (e.key === 'ArrowUp') setIndex(index - 1)
        else if (e.key === 'Escape') {
            setMenu(false)
        }
    }

    const handleSubItemClick = (e, subItem) => {
        if (props.onChange) props.onChange(subItem)
        setTimeout(() => {
            setMenu(false)
        })
    }

    const getValue = () => {
        if (props.itemKey && !!props.returnObject && !props.childrenKey) return props.value[props.itemKey];
        else return props.value
    }

    return (
        <Dropdown
            className={strinfigyClassObject(className)}
            closeManaged
            contentMaxHeight={props.maxHeight}
            visible={menu}
            dark={props.dark}
            trigger={
                !props.multiple ? 
                <InputField
                    dark={props.dark}
                    label={props.label ? props.label : ''}
                    color={props.color ? props.color : 'primary'}
                    suffix={<Icon
                                className="cursor-pointer" 
                                disabled={props.disabled}
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
                    style={{ width: props.width }}
                    placeholder={props.placeholder}/> : 
                    <div 
                        ref={checkboxesContainer}
                        onClick={() => !props.disabled ? setMenu(true) : {}}
                        style={{ width: props.width ? props.width : 100 }} 
                        className={props.disabled ? 
                            'rui-select__multiple disabled' : 
                            'rui-select__multiple'}>
                        {!!props.label && 
                            <label
                                className={focus ? `text-${props.color ? props.color : 'primary'}` : ''}>
                                    {props.label}</label>}
                        <div style={{ backgroundColor: props.whiteBackground ? '#fff' : '' }} 
                            className={strinfigyClassObject(classNameMultiple)}>
                            {props.prefix ? <span className="rui-input-prefix">{props.prefix}</span> : ''}
                            {selected.length > 0 ? 
                                <div className="rui-select__multiple-item">
                                    {selected.map((item, index) => 
                                        <Tag 
                                            key={index} 
                                            tiny
                                            disabled={props.disabled}
                                            outlined={props.tagOutlined} 
                                            color={props.tagColor}
                                            onClick={(e) => 
                                                handleItemClick(props.itemKey ? {[props.itemKey]: item } : item)}
                                            visible={isSelected(item)}
                                            className="ma-1">
                                            {item}
                                        </Tag>
                                    )}
                                </div> :
                                (!!props.placeholder && <div className="rui-select__multiple-placeholder">{props.placeholder}</div>)
                            }
                            <span className="rui-input-suffix"><Icon name={menu ? 'chevron-up' : 'chevron-down'}/></span>
                        </div>
                    </div>
                    }>
            <div className="rui-select__menu">
                {props.searchable && !props.childrenKey ? 
                <InputField
                    style={{ width: props.width ? props.width : '' }}
                    dark={props.dark}
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
                        <List.Item
                            key={index}
                            color={props.color}
                            tabIndex={index}
                            isActiveItem={getActiveItem(item)}
                            onClick={() => handleItemClick(item)}
                            checkbox={props.multiple}
                            controls={!props.multiple && props.childrenKey && 
                                <Icon
                                    onClick={() => handleItemClick(item)} 
                                    name="chevron-next"
                                    className="rui-select__next-icon"/>}
                            item={props.itemKey ? item[props.itemKey] : item}
                            hover>
                            {!props.multiple && 
                                props.childrenKey &&
                                <div className="rui-select__submenu">
                                    <List 
                                        dark={props.dark} 
                                        size={props.size}
                                        className="rui-select__submenu-list">
                                        {item[props.childrenKey].map((subItem, iterator) => 
                                            <List.Item
                                                onClick={e => handleSubItemClick(e, subItem)}
                                                isActiveItem={subItem === props.value}
                                                key={iterator}
                                                item={subItem}
                                                hover/>
                                        )}
                                    </List>
                                </div>}
                        </List.Item>
                    )}
                </List>
            </div>
        </Dropdown>
    )
}
Select.propTypes = {
    items: PropTypes.array.isRequired,
    itemKey: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]).isRequired,
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
    disabled: PropTypes.bool,
    tagColor: PropTypes.string,
    tagOutlined: PropTypes.bool,
    whiteBackground: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    childrenKey: PropTypes.string,
    className: PropTypes.string
}
export default Select;