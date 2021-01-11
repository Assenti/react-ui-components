import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Checkbox, Tooltip } from '../index';
import { strinfigyClassObject } from '../utils';

const ListItem = (props) => {
    let className = {
        item: 'rui-list-item',
        roundedActive: props.roundedActive ? 'rounded' : '',
        right: props.leftBorder ? 'left' : 'right',
        active: props.isActiveItem ? 'active' : '',
        color: props.color ? props.color : 'primary',
        hover: props.hover ? 'hover' : '',
        noDivider: props.noDivider ? '' : 'divider',
        className: props.className ? props.className : ''
    }

    const handleClick = (e, skip) => {
        if (skip) {
            props.onClick(e)
            return
        }
        if (e.currentTarget === e.target) {
            if (props.onClick) {
                props.onClick(e)
            }
        }
    }

    return (
        <div onClick={handleClick}
            tabIndex={props.tabIndex} 
            onMouseLeave={e => props.onMouseLeave ? props.onMouseLeave(e) : {}}
            onMouseOver={e => props.onMouseOver ? props.onMouseOver(e) : {}}
            className={strinfigyClassObject(className)}
            style={{ width: props.width ? props.width : ''}}>
            <>
                <div className="rui-list-item__left-side">
                    <div>
                        {props.avatar && !props.icon ? props.avatar : null}
                        {props.icon && 
                            !props.avatar && 
                            (props.tooltip ? 
                            <Tooltip tooltip={props.tooltip} position={props.tooltipPosition}>
                                <Icon name={props.icon} onClick={e => handleClick(e, true)}/>
                            </Tooltip> :
                            <Icon name={props.icon} onClick={e => handleClick(e, true)}/>)}
                        <div onClick={handleClick}>
                            <div className="rui-list-item__title-row">
                                {props.checkbox ? 
                                <Checkbox
                                    fill
                                    color={props.color ? props.color : 'primary'}
                                    className="mr-10" 
                                    checked={props.isActiveItem}
                                    onChange={handleClick}/> : ''}
                                {props.href ?
                                    <a href={props.href} rel="noopener noreferrer" target={props.blank ? '_blank' : undefined}>{props.item}</a> :
                                    <span onClick={handleClick}>{props.item}</span>
                                }
                            </div>
                            {!!props.subTitle && <div className="rui-list-subtitle">{props.subTitle}</div>}
                        </div>
                    </div>
                </div>
                <div className="rui-list-item__right-side">
                    {props.controls}
                </div>
                {props.children}
            </>
        </div>
    )
}
ListItem.propTypes = {
    roundedActive: PropTypes.bool,
    leftBorder: PropTypes.bool,
    isActiveItem: PropTypes.bool,
    color: PropTypes.oneOf(['primary','info','success','error']),
    hover: PropTypes.bool,
    noDivider: PropTypes.bool,
    checkbox: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    item: PropTypes.oneOfType([PropTypes.string,PropTypes.number, PropTypes.object]),
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseLeave: PropTypes.func,
    href: PropTypes.string,
    blank: PropTypes.bool,
    subTitle: PropTypes.string,
    icon: PropTypes.string,
    tooltip: PropTypes.string,
    tooltipPosition: PropTypes.oneOf(['top','bottom','left','right']),
    avatar: PropTypes.node,
    controls: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
    className: PropTypes.string,
    children: PropTypes.node
}
export default ListItem;