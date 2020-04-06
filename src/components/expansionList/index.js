import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const ExpansionList = (props) => {
    const prepareItems = (initial) => {
        let items = [];
        for (let i = 0; i < initial.length; i++) {
            items.push({ ...initial[i], active: false })
        }
        
        if (props.defaultOpens && props.defaultOpens.length > 0) {
            for (let i = 0; i < props.defaultOpens.length; i++) {
                items[props.defaultOpens[i]].active = true;
            }
        }
        return items;
    }

    const [localItems, setLocalItems] = useState(prepareItems(props.items));
    const [active, setActive] = useState('');

    const className = () => {
        let result = '';
        let className = {
            name: 'rui-expansion-list',
            size: props.size ? props.size : '',
            dark: props.dark ? 'dark' : '',
            reverse: props.reverse ? 'reverse' : '',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handleClick = (item, index) => {
        if (props.accordion) {
            if (active === index) setActive('')
            else setActive(index)
        } else {
            let updated = [];
            for (let i = 0; i < localItems.length; i++) {
                if (i === index) {
                    localItems[i].active = !localItems[i].active
                    updated.push(localItems[i])
                } else {
                    updated.push(localItems[i])
                }
            }
            setLocalItems(updated)
        }
    }

    const getStyles = (item, index) => {
        if (props.accordion) {
            return { 
                height: active === index ? 'auto' : 0,
                padding: active === index ? '10px' : '0 10px'
            }
        } else {
            return { 
                height: item.active ? 'auto' : 0,
                padding: item.active ? '10px' : '0 10px'
            }
        }
    }

    const getName = (item, index) => {
        if (props.accordion) {
            return active === index ? 'chevron-up' : 'chevron-down';
        } else {
            return item.active ? 'chevron-up' : 'chevron-down';
        }
    }

    const isActive = (item, index) => {
        if (props.accordion) {
            return active === index ? 'active' : '';
        } else {
            return item.active ? 'active' : '';
        }
    }

    const hasBorder = (item, index) => {
        if (props.accordion) {
            return { borderBottom: active === index ? 'none' : '' }
        } else {
            return { borderBottom: item.active ? 'none' : '' }
        }
    }

    return (
        <div className={className()} 
            style={{ 
                width: props.width ? props.width : '' 
            }}>
            {localItems.map((item, index) => 
                <div className="rui-expansion-list-item" key={index}>
                    <div className="rui-expansion-list-item-title"
                        style={hasBorder(item, index)} 
                        onClick={() => props.onItemClick ? props.onItemClick(item, index) : {}}>
                        <div>{props.titleKey ? item[props.titleKey] : item}</div>
                        <Icon
                            onClick={() => handleClick(item, index)}
                            color={props.dark ? '#fff' : ''}
                            name={getName(item, index)}
                            />
                    </div>
                    <div style={getStyles(item, index)} 
                        className={(`rui-expansion-list-item-content ${isActive(item, index)}`).trim()}>
                        {props.itemContent ? props.itemContent(item, index) : {}}
                    </div>
                </div>
            )}
        </div>
    )
}
ExpansionList.propTypes = {
    items: PropTypes.array,
    defaultOpens: PropTypes.arrayOf(PropTypes.number),
    accordion: PropTypes.bool,
    reverse: PropTypes.bool,
    size: PropTypes.oneOf(['','default','medium','large']),
    titleKey: PropTypes.string,
    onItemClick: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    itemContent: PropTypes.func,
    dark: PropTypes.bool,
    className: PropTypes.string
}
export default ExpansionList;