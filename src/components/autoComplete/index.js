import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, InputField, List, Icon } from '../index';
import { strinfigyClassObject } from '../utils';

const AutoComplete = (props) => {
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState('');
    let className = {
        btn: 'rui-autocomplete',
        maxHeight: props.contentMaxHeight ? 'max-height' : '',
        color: props.color && props.color !== 'default' ? props.color : 'primary',
        className: props.className ? props.className : ''
    }

    const getItem = (item, lower) => props.itemKey ? 
        (lower ? item[props.itemKey].toLowerCase() : item[props.itemKey]) : 
        (lower ? item.toLowerCase() : item);

    const filtered = () => {
        if (search) {
            return props.items.filter(item => 
                getItem(item, true).includes(search.toLowerCase()));
        } else {
            return []
        }
    }

    const handleItemClick = (item) => {
        setSearch(item)
        setTimeout(() => {
            setVisible(false)
        })
    }

    const handleClear = () => {
        if (props.onClear) {
            props.onClear()
            setSearch('')
        }
        setVisible(false)
    }

    const handleSuffix = () => {
        if (props.loading) {
            return <Icon name="loading" className="rui-autocomplete__loading loading"/>
        } else if (!props.loading && props.suffix) {
            return props.suffix;
        } else return null;
    }

    return (
        <div className={strinfigyClassObject(className)} 
            style={props.style}>
            <Dropdown
                visible={visible}
                width={props.width ? props.width : ''}
                closeManaged
                dark={props.dark}
                contentMaxHeight={props.contentMaxHeight}
                content={
                    <>
                        <List dark={props.dark}
                            size={props.size}
                            header={props.listHeader}>
                            {filtered().map((item, index) => 
                                <List.Item
                                    key={index}
                                    avatar={props.avatarKey}
                                    avatarSize={props.avatarSize}
                                    avatarBorderType={props.avatarBorderType}
                                    icon={props.iconKey ? item[props.iconKey] : null}
                                    hover={props.hover === false ? false : true}
                                    onClick={() => {
                                        handleItemClick(getItem(item))
                                        if (props.onItemClick) props.onItemClick(item)
                                    }}
                                    item={getItem(item)}/>
                            )}
                        </List>
                        {props.footer(filtered().length)}
                    </>
                }
                trigger={<InputField
                            color={props.color}
                            dark={props.dark}
                            disabled={props.disabled || props.loading}
                            required={props.required}
                            readOnly={props.readOnly}
                            lifted={props.lifted}
                            borderType={props.borderType}
                            uppercase={props.uppercase}
                            whiteBackground={props.whiteBackground}
                            prefix={props.prefix}
                            suffix={handleSuffix()}
                            value={search}
                            size={props.size}
                            clearable={props.clearable}
                            onClear={handleClear}
                            onFocus={() => !props.disabled ? setVisible(true) : {}}
                            onBlur={() => setVisible(false)}
                            onChange={e => setSearch(e.target.value)}
                            placeholder={props.placeholder}
                            label={props.label}
                            hintColor={props.hintColor}/>}/>
        </div>
    )
}

AutoComplete.propTypes = {
    items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.object)]).isRequired,
    iconKey: PropTypes.string,
    itemKey: PropTypes.string,
    avatarKey: PropTypes.string,
    avatarSize: PropTypes.number,
    avatarBorderType: PropTypes.oneOf([undefined, 'rounded']),
    onItemClick: PropTypes.func,
    contentMaxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hover: PropTypes.bool,
    listHeader: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
    footer: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'info', 'success', 'error']),
    size: PropTypes.oneOf([undefined, 'default', 'medium', 'large']),
    borderType: PropTypes.oneOf([undefined, 'default', 'tile', 'rounded', 'smooth']),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    prefix: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
    suffix: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
    whiteBackground: PropTypes.bool,
    uppercase: PropTypes.bool,
    lifted: PropTypes.bool,
    disabled: PropTypes.bool,
    clearable: PropTypes.bool,
    onClear: PropTypes.func,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    loading: PropTypes.bool,
    style: PropTypes.any,
    className: PropTypes.string
};
export default AutoComplete;