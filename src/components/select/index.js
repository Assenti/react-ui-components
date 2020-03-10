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

    const handleItemClick = (e, item, index) => {
        if (e.currentTarget === e.target) {
            if (props.childrenKey && !props.multiple) {
                setSubMenu(true)
                setActiveIndex(index)               
            } else if (isMultiple()) {
                if (isSelected(item)) {
                    setSelected(() => selected.filter(i => i !== item))
                    props.onSelect(item, selected.filter(i => i !== item))
                } else {
                    setSelected([...selected, item])
                    props.onSelect(item, [...selected, item])
                }
                setFocus(false)
            } else {
                setMenu(false)
                props.onChange(item)
            }
        }
    }

    const getActiveItem = (item) => {
        if (!props.childrenKey && !props.multiple) {
            if (props.itemTitle) {
                return item[props.itemTitle] === props.value
            } else {
                return item === props.value
            }
        } else if (isMultiple()) {
            return isSelected(props.itemTitle ? item[props.itemTitle] : item)
        } else {
            return item[props.childrenKey].includes(props.value)
        }
    }

    const handleCloseOnBlur = (e) => {
        if (e.currentTarget === e.target && !searchFocus) {
            setMenu(false)
            setSubMenu(false)

            if (props.searchable) {
                setSearchFocus(false)
                setSearch('')
            }
        }
    }

    const filteredItems = () => {
        if (search) {
            return props.items.filter(item => {
                return props.itemTitle ? 
                    item[props.itemTitle].toLowerCase().includes(search.toLowerCase()) :
                    item.toLowerCase().includes(search.toLowerCase())
            })
        } else {    
            return props.items
        }
    }

    const selectMultipleItemClass = () => {
        return props.size ? `rui-select__multiple-items ${props.size}` : 'rui-select__multiple-items'
    }

    const handleFocus = (e) => {
        if (e.currentTarget === e.target) setMenu(true)
    }

    const handleBlur = (e) => {
        if (e.currentTarget === e.target) setMenu(false)
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
                        value={search}
                        autoFocus
                        placeholder={props.searchPlaceholder ? props.searchPlaceholder : 'Search'}
                        onChange={e => setSearch(e.target.value)}
                        className="full-width pa-5"/> : ''}
                    <List className="relative" 
                        size={props.size ? props.size : ''}>
                        {filteredItems().map((item, index) => 
                            <ListItem
                                key={index}
                                tabIndex={index}
                                isActiveItem={getActiveItem(item)}
                                onClick={e => handleItemClick(e, props.itemTitle ? 
                                    item[props.itemTitle] : item, index)}
                                checkbox={props.multiple}
                                controls={!props.multiple && props.childrenKey ? 
                                    <Icon name="chevron-next"/> : ''}
                                item={props.itemTitle ? item[props.itemTitle] : item}
                                hover>
                                {!props.multiple ? <CSSTransition
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
                    value={props.value}
                    onKeyUp={handleKeyUp}
                    whiteBackground={props.whiteBackground ? props.whiteBackground : false}
                    size={props.size ? props.size : ''}
                    borderType={props.borderType ? props.borderType : ''}
                    prefix={props.prefix ? props.prefix : ''}
                    clearable={props.clearable ? props.clearable : false}
                    onClear={props.onClear ? props.onClear() : {}}
                    onFocus={() => setMenu(true)}
                    onBlur={e => props.value && !props.childrenKey ? handleCloseOnBlur(e) : {}}
                    className="full-width"
                    width={props.width ? props.width : ''}
                    placeholder={props.placeholder}/> : 
                    <div style={{ width: props.width ? props.width : 100 }} 
                        className="rui-select__multiple">
                        {props.label ? 
                            <label
                                className={focus ? 'text-info' : ''} 
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
                                            small={props.size ? false : true}
                                            value={item} 
                                            color={props.tagColor}
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
    items: PropTypes.arrayOf(PropTypes.string) || PropTypes.arrayOf(PropTypes.object),
    itemName: PropTypes.string,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    prefix: PropTypes.string || PropTypes.number || PropTypes.node,
    searchable: PropTypes.bool,
    borderType: PropTypes.oneOf(['tile','rounded','smooth']),
    multiple: PropTypes.bool,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['medium','large']),
    color: PropTypes.oneOf(['primary','info','success','error']),
    dark: PropTypes.bool,
    tagColor: PropTypes.string,
    whiteBackground: PropTypes.bool,
    width: PropTypes.string || PropTypes.number,
    label: PropTypes.string,
    childrenKey: PropTypes.string,
    className: PropTypes.string
}
Select.defaultProps = {
    color: 'primary'
}
export default Select;