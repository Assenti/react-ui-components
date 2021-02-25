import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, strinfigyClassObject } from '../index';

const ExpansionList = (props) => {
    const prepareItems = () => {
        let items = props.items.map(item => {
            return { ...item, active: false }
        })
        if (props.defaultOpens && props.defaultOpens.length > 0) {
            for (let i = 0; i < props.defaultOpens.length; i++) {
                items[props.defaultOpens[i]].active = true;
            }
        }
        return items;
    }

    let className = {
        name: 'rui-expansion-list',
        hover: props.hover ? 'hover' : '',
        dark: props.dark ? 'dark' : '',
        className: props.className ? props.className : ''
    }

    const [localItems, setLocalItems] = useState(prepareItems());
    const [active, setActive] = useState('');

    const handleClick = (index) => {
        let updated = [];
        for (let i = 0; i < localItems.length; i++) {
            if (i === index) {
                localItems[i].active = !localItems[i].active
                updated.push(localItems[i])
            } else {
                localItems[i].active = false;
                updated.push(localItems[i])
            }
        }
        setLocalItems(updated)
    }

    const getClass = (item, index) => {
        if (props.accordion) return item.active ? 'active' : '';
        else return index === active ? 'active' : '';
    }

    return (
        <div className={strinfigyClassObject(className)} 
            style={{ width: props.width ? props.width : ''}}>
            {localItems.map((item, index) => 
                <Collapse
                    key={index}
                    icon={props.triggerIcon ? props.triggerIcon : ''}
                    iconColor={props.triggerIconColor ? props.triggerIconColor : ''}
                    iconSize={props.iconSize ? props.iconSize : ''}
                    controled={props.accordion}
                    visible={item.active}
                    hover={props.hover}
                    className={getClass(item, index)}
                    onChange={state => {
                        if (props.onItemClick) props.onItemClick(item, index)
                        if (props.accordion) {
                            handleClick(index)
                        } else {
                            if (state) setActive(index)
                            else setActive('')
                        }
                    }}
                    title={props.titleContent(item, index)}>
                    {props.itemContent ? props.itemContent(item, index) : null}
                </Collapse>
            )}
        </div>
    )
}
ExpansionList.propTypes = {
    items: PropTypes.array,
    triggerIcon: PropTypes.string,
    triggerIconColor: PropTypes.string,
    triggerIconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultOpens: PropTypes.arrayOf(PropTypes.number),
    accordion: PropTypes.bool,
    hover: PropTypes.bool,
    titleContent: PropTypes.func.isRequired,
    onItemClick: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    itemContent: PropTypes.func,
    dark: PropTypes.bool,
    className: PropTypes.string
}
export default ExpansionList;