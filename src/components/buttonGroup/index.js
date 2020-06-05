import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '../index';
import { strinfigyClassObject } from '../utils';

const ButtonGroup = (props) => {
    const [active, setActive] = useState(props.default);
    let className = {
        btn: 'rui-btn-group',
        lifted: props.lifted ? 'lifted' : '',
        icons: props.icon ? 'icons' : '',
        size: props.size ? props.size : '',
        className: props.className ? props.className : ''
    }

    const isActive = (index) => {
        return index === active ? 'active' : ''
    }

    const handleChange = (item, index) => {
        if (props.onChange) props.onChange(item, index)
        setActive(index)
    }

    return (
        <div className={strinfigyClassObject(className)}>
            {props.options.map((item, index) => 
                <Button 
                    key={index}
                    size={props.size ? props.size : ''}
                    className={isActive(index)}
                    name={!props.icon ? item : ''}
                    icon={props.icon ? <Icon name={item}/> : ''} 
                    color={props.color ? props.color : ''}
                    onClick={() => handleChange(item, index)}
                    outlined={props.outlined ? true : false}/>
            )}
        </div>
    )
}
ButtonGroup.propTypes = {
    default: PropTypes.number,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    lifted: PropTypes.bool,
    outlined: PropTypes.bool,
    size: PropTypes.oneOf([undefined,'','default','medium','large']),
    name: PropTypes.string,
    icon: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'','primary','info','success','error','secondary','black']),
    className: PropTypes.string
}
export default ButtonGroup;