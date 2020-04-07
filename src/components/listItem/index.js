import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Checkbox, Avatar, Tooltip } from '../index';

const ListItem = (props) => {
    const itemClass = () => {
        let result = '';
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

        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handleClick = (e) => {
        if (e.currentTarget === e.target) {
            if (props.onClick) {
                props.onClick(e)
            }
        }
    }

    return (
        <div onClick={handleClick}
            tabIndex={props.tabIndex} 
            className={itemClass()}>
            {!props.render ?
                <>
                    <div className="rui-list-item__left-side">
                        <div className="row align-center">
                            {props.avatar && !props.icon ? 
                                <Avatar
                                    className="mr-10" 
                                    img={props.avatar}
                                    size={props.avatarSize} 
                                    borderType={props.avatarBorderType}/> : ''
                            }
                            {props.icon && !props.avatar ? 
                                (props.tooltip ? 
                                <Tooltip tooltip={props.tooltip} position={props.tooltipPosition}>
                                    <Icon name={props.icon}/>
                                </Tooltip> :
                                <Icon name={props.icon}/>) : 
                            ''}
                            <div>
                                <div className="rui-list-item__title-row">
                                    {props.checkbox ? 
                                    <Checkbox
                                        color={props.color ? props.color : 'primary'}
                                        className="mr-10" 
                                        checked={props.isActiveItem}
                                        onChange={handleClick}/> : ''}
                                    <span onClick={handleClick}>{props.item}</span>
                                </div>
                                {props.subTitle ? <div className="rui-list-subtitle">{props.subTitle}</div> : ''}
                            </div>
                        </div>
                    </div>
                    <div className="rui-list-item__right-side">
                        {props.controls}
                    </div>
                    {props.children}
                </>  :
                props.render
            }
        </div>
    )
}
ListItem.propTypes = {
    roundedActive: PropTypes.bool,
    leftBorder: PropTypes.bool,
    isActiveItem: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'','primary','info','success','error']),
    hover: PropTypes.bool,
    noDivider: PropTypes.bool,
    checkbox: PropTypes.bool,
    item: PropTypes.oneOfType([PropTypes.string,PropTypes.number, PropTypes.object]),
    onClick: PropTypes.func,
    subTitle: PropTypes.string,
    icon: PropTypes.string,
    tooltip: PropTypes.string,
    tooltipPosition: PropTypes.oneOf([undefined,'','bottom','left','right']),
    avatar: PropTypes.string,
    avatarSize: PropTypes.number,
    avatarBorderType: PropTypes.oneOf([undefined,'','tile','rounded']),
    controls: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
    render: PropTypes.node,
    className: PropTypes.string
}
ListItem.defaultProps = {
    color: 'primary'
}
export default ListItem;