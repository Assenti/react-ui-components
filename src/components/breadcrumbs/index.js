import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { strinfigyClassObject } from '../utils';

const Breadcrumbs = (props) => {
    let className = {
        name: 'rui-breadcrumbs',
        size: props.size ? props.size : '',
        dark: props.dark ? 'dark' : '',
        color: props.color ? props.color : 'info',
        position: props.position ? props.position : '',
        className: props.className ? props.className : ''
    }

    return (
        <div className={strinfigyClassObject(className)}>
            {props.crumbs.map((item, index) =>
                <div key={index} 
                    className={props.isActive ? 
                        (props.isActive(item, index) ? 
                        'rui-breadcrumbs__item active' : 
                        'rui-breadcrumbs__item') : 'rui-breadcrumbs__item'}
                    onClick={() => props.onChange ? props.onChange(item, index) : {}}>
                    <a href={props.urlKey ? item[props.urlKey] : ''}>
                        {props.icon ? <Icon name={item[props.icon]}/> : ''}
                        {props.itemKey ? item[props.itemKey] : item}
                    </a>
                    <span>{props.delimiter ? props.delimiter : '/'}</span>
                </div>
            )}
        </div>
    )
}
Breadcrumbs.propTypes = {
    crumbs: PropTypes.array.isRequired,
    icon: PropTypes.string,
    itemKey: PropTypes.string,
    urlKey: PropTypes.string,
    isActive: PropTypes.func,
    onChange: PropTypes.func,
    delimiter: PropTypes.string,
    dark: PropTypes.bool,
    size: PropTypes.oneOf(['default','medium','large']),
    color: PropTypes.oneOf(['primary','info','success','error','dark','secondary']),
    position: PropTypes.oneOf(['default','center','right']),
    className: PropTypes.string
}
export default Breadcrumbs;