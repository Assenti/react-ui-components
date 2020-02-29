import React from 'react';
import { Icon, Checkbox } from '../index';

const ListItem = (props) => {
    const itemClass = () => {
        let result = '';
        let className = {
            item: 'rui-list-item',
            roundedActive: props.roundedActive ? 'rounded' : '',
            right: props.leftBorder ? 'left' : 'right',
            active: props.isActiveItem ? 'active' : '',
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
                <React.Fragment>
                    <div className="rui-list-item__left-side">
                        <div className="rui-list-item__title-row">
                            {props.icon ? <Icon name={props.icon}/> : ''}
                            {props.checkbox ? <Checkbox
                                color="info"
                                className="mr-10" 
                                checked={props.isActiveItem}
                                onChange={handleClick}/> : ''}
                            <span onClick={handleClick}>{props.item}</span>
                        </div>
                        {props.subTitle ? <div className="rui-list-subtitle">{props.subTitle}</div> : ''}
                    </div>
                    <div className="rui-list-item__right-side">
                        {props.controls}
                    </div>
                    {props.children}
                </React.Fragment>  :
                props.render
            }
        </div>
    )
}

export default ListItem;