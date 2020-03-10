import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const Breadcrumbs = (props) => {
    const componentClass = () => {
        let result = '';
        let className = {
            name: 'rui-breadcrumbs',
            size: props.size ? props.size : '',
            color: props.color ? props.color : 'info',
            position: props.position && props.position !== 'default' ? props.position : '',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={componentClass()}>
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
    crumbs: PropTypes.arrayOf(PropTypes.object || PropTypes.string).isRequired,
    icon: PropTypes.string,
    itemKey: PropTypes.string,
    urlKey: PropTypes.string,
    isActive: PropTypes.func,
    onChange: PropTypes.func,
    delimiter: PropTypes.string,
    size: PropTypes.oneOf(['medium','large']),
    color: PropTypes.oneOf(['primary','info','success','error','dark','secondary']),
    position: PropTypes.oneOf(['center','right']),
    className: PropTypes.string
}
Breadcrumbs.defaultProps = {
    color: 'info',
    delimiter: '/'
}
export default Breadcrumbs;